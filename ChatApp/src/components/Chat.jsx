import { Context } from "../utils/Context";
import { useContext, useState } from "react";

const Chat = () => {
  const {
    setToggle,
    selectedContact,
    setSelectedContact,
    users,
    setUser,
    loginUser,
  } = useContext(Context);

  const [message, setMessage] = useState("");
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showGroups, setShowGroups] = useState(false); // Toggle between friends and groups
  const [selectedGroup, setSelectedGroup] = useState(null); // Selected group for chat
  const [chatType, setChatType] = useState("friend"); // "friend" or "group"

  const user = users.find((user) => user.name === loginUser.name);

  // Handle creating group
  const handleCreateGroup = (e) => {
    e.preventDefault();

    if (!groupName.trim()) {
      alert("Please enter a group name!");
      return;
    }

    if (selectedMembers.length === 0) {
      alert("Please select at least one member!");
      return;
    }

    const newGroup = {
      groupname: groupName.trim(),
      avatar: "👥",
      groupmembers: [user.name, ...selectedMembers],
      groupmessages: {
        sendmessage: [],
        receivemessage: [],
      },
      groupMessagesCount: 0,
    };

    // Add group to user's groups
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return {
          ...u,
          groups: [...(u.groups || []), newGroup],
        };
      }
      return u;
    });

    setUser(updatedUsers);

    // Reset form
    setGroupName("");
    setSelectedMembers([]);
    setShowGroupForm(false);

    alert(`Group "${groupName}" created successfully! 🎉`);
  };

  // Toggle member selection
  const toggleMemberSelection = (friendName) => {
    if (selectedMembers.includes(friendName)) {
      setSelectedMembers(selectedMembers.filter((name) => name !== friendName));
    } else {
      setSelectedMembers([...selectedMembers, friendName]);
    }
  };

  // Handle viewing new messages
  const handleViewNewMessages = () => {
    console.log("📬 New Messages:", user?.newMessage);

    // Clear newMessage array after viewing
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return {
          ...u,
          newMessage: [], // Clear the array
        };
      }
      return u;
    });

    setUser(updatedUsers);
    alert(
      `You have ${user?.newMessage?.length || 0} new messages! Check console for details.`,
    );
  };

  // Get combined messages for selected contact
  const getCombinedMessages = () => {
    if (!selectedContact || !selectedContact.messages) return [];

    const sent = selectedContact.messages.sendmessage || [];
    const received = selectedContact.messages.receivemessage || [];

    // Combine and sort by id
    return [...sent, ...received].sort((a, b) => a.id - b.id);
  };

  // Handle selecting a contact and reset ONLY that contact's unread count
  const handleSelectContact = (contact) => {
    // Set chat type to friend and clear group selection
    setChatType("friend");
    setSelectedGroup(null);

    // Update the users state to reset unread count for ONLY this contact
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return {
          ...u,
          friends: u.friends.map((friend) => {
            if (friend.id === contact.id) {
              return {
                ...friend,
                unread: 0, // Reset unread count for selected contact only
              };
            }
            return friend; // Keep other friends unchanged
          }),
        };
      }
      return u;
    });

    setUser(updatedUsers);

    // Set the selected contact with updated unread count
    const updatedContact = updatedUsers
      .find((u) => u.id === user.id)
      ?.friends.find((f) => f.id === contact.id);

    if (updatedContact) {
      setSelectedContact(updatedContact);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim() && selectedContact) {
      const newMessage = {
        id: Date.now(),
        sender: "me",
        text: message.trim(),
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const receivedMessage = {
        id: Date.now(),
        sender: "them",
        text: message.trim(),
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      console.log("📤 Sending message:", message.trim());
      console.log("👤 From:", user.name, "(ID:", user.id, ")");
      console.log(
        "👥 To:",
        selectedContact.name,
        "(Friend ID:",
        selectedContact.id,
        ")",
      );

      // Update BOTH users: sender and receiver
      const updatedUsers = users.map((u) => {
        // Update the logged-in user (sender) - add to sendmessage
        if (u.id === user.id) {
          console.log("✅ Updating sender:", u.name);
          return {
            ...u,
            friends: u.friends.map((friend) => {
              if (friend.id === selectedContact.id) {
                console.log(
                  "  ✅ Adding to friend's sendmessage:",
                  friend.name,
                );
                return {
                  ...friend,
                  lastMessage: message.trim(),
                  time: new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  messages: {
                    ...friend.messages,
                    sendmessage: [
                      ...(friend.messages?.sendmessage || []),
                      newMessage,
                    ],
                  },
                };
              }
              return friend;
            }),
          };
        }

        // Update the receiver (friend) - add to receivemessage
        // Find receiver by name since friend IDs don't match user IDs
        if (u.name === selectedContact.name) {
          // console.log("✅ Found receiver user:", u.name, "(ID:", u.id, ")");

          // Check if sender is already in receiver's friend list
          const hasSenderAsFriend = u.friends.some(
            (friend) => friend.name === user.name,
          );

          // console.log("  🔍 Is sender already a friend?", hasSenderAsFriend);

          if (hasSenderAsFriend) {
            // Sender is already a friend, just add the message
            alert("  ✅ Adding to receiver's receivemessage");
            return {
              ...u,
              newMessage: [
                ...(u.newMessage || []),
                receivedMessage, // Add to newMessage array
              ],
              friends: u.friends.map((friend) => {
                if (friend.name === user.name) {
                  alert(
                    "    ✅ Updated friend:",
                    friend.name,
                    "- Unread:",
                    friend.unread + 1,
                  );
                  return {
                    ...friend,
                    lastMessage: message.trim(),
                    time: new Date().toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                    unread: friend.unread + 1,
                    messages: {
                      ...friend.messages,
                      receivemessage: [
                        ...(friend.messages?.receivemessage || []),
                        receivedMessage,
                      ],
                    },
                  };
                }
                return friend;
              }),
            };
          } else {
            // Sender is NOT a friend yet, add them to friend list
            alert("  ⭐ Adding sender as NEW friend to receiver's list");
            const newFriend = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
              lastMessage: message.trim(),
              time: new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              unread: 1,
              isOnline: user.isOnline,
              messages: {
                sendmessage: [],
                receivemessage: [receivedMessage],
              },
            };

            return {
              ...u,
              newMessage: [
                ...(u.newMessage || []),
                receivedMessage, // Add to newMessage array
              ],
              friends: [...u.friends, newFriend],
            };
          }
        }

        return u;
      });

      // console.log("💾 Updated users state:", updatedUsers);
      setUser(updatedUsers);

      // Update selectedContact to reflect new message
      const updatedFriend = updatedUsers
        .find((u) => u.id === user.id)
        ?.friends.find((f) => f.id === selectedContact.id);

      if (updatedFriend) {
        // console.log("🔄 Updating selectedContact with:", updatedFriend);
        setSelectedContact(updatedFriend);
      }

      setMessage("");
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden flex border border-gray-200">
      <div className="w-full h-[85vh] bg-white rounded-lg shadow-md overflow-hidden flex border border-gray-200">
        <div className="w-1/3 border-r border-gray-200 flex flex-col bg-gray-50">
          <div className="p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Messages</h2>
              <div>
                <button
                  onClick={() => setToggle(false)}
                  className="px-3 py-2 bg-blue-500 text-white rounded-md bg-red-400 hover:bg-red-600 mr-4"
                >
                  Logout
                </button>
                <button
                  onClick={() => setShowGroups(!showGroups)}
                  className={`px-3 py-2 text-white rounded-md mr-4 ${
                    showGroups
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-green-400 hover:bg-green-600"
                  }`}
                >
                  {showGroups ? "Show Friends" : "Show Groups"}
                </button>
                <button
                  onClick={handleViewNewMessages}
                  className="px-3 py-2 bg-blue-500 text-white rounded-md bg-blue-400 hover:bg-blue-600"
                >
                  New Message
                </button>
                <sup className="text-red-500 relative -top-6 px-2 py-[.1rem] rounded-full bg-red-400 text-white text-sm">
                  {user?.newMessage?.length}
                </sup>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {!showGroups ? (
              // Show Friends
              user?.friends?.map((elem) => (
                <div
                  key={elem.id}
                  onClick={() => handleSelectContact(elem)}
                  className={`p-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200 ${
                    selectedContact?.id === elem.id ? "bg-blue-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl">
                        {elem.avatar}
                      </div>
                      {elem.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 truncate text-sm">
                          {elem.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {elem.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {elem.lastMessage}
                      </p>
                    </div>

                    {elem.unread > 0 && (
                      <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {elem.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : // Show Groups
            user?.groups && user.groups.length > 0 ? (
              user.groups.map((group, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedGroup(group);
                    setChatType("group");
                    setSelectedContact(null); // Clear friend selection
                  }}
                  className={`p-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200 ${
                    chatType === "group" &&
                    selectedGroup?.groupname === group.groupname
                      ? "bg-green-100"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-2xl">
                      {group.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 truncate text-sm">
                          {group.groupname}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {group.groupmembers.length} members
                      </p>
                    </div>

                    {group.groupMessagesCount > 0 && (
                      <div className="bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {group.groupMessagesCount}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <p className="mb-2">No groups yet</p>
                <p className="text-sm">Click "Create Group" to start!</p>
              </div>
            )}
          </div>
          <div
            onClick={() => setShowGroupForm(true)}
            className="p-4 bg-white flex items-center gap-4 cursor-pointer hover:bg-gray-100"
          >
            <button className="w-fit rounded-full text-xl font-bold px-6 py-4 bg-green-500 text-white">
              +
            </button>
            <h1 className="text-xl font-bold text-gray-800">Create Group</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          {chatType === "friend" && selectedContact ? (
            <>
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
                      {selectedContact.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {selectedContact.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {selectedContact.isOnline ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {getCombinedMessages().map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex mb-4 ${
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "me"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-800 border border-gray-300"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white border-t border-gray-200">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Send
                  </button>
                </form>
              </div>
            </>
          ) : chatType === "group" && selectedGroup ? (
            <>
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center text-xl">
                      {selectedGroup.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {selectedGroup.groupname}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {selectedGroup.groupmembers.length} members:{" "}
                        {selectedGroup.groupmembers.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {selectedGroup.groupmessages?.sendmessage?.map((msg) => (
                  <div key={msg.id} className="flex mb-4 justify-end">
                    <div className="max-w-[70%] rounded-lg p-3 bg-green-500 text-white">
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white border-t border-gray-200">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Group messaging coming soon!");
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a group message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Send
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Select a conversation
                </h3>
                <p className="text-gray-500">
                  Choose a contact from the list to start chatting
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Group Form Modal */}
      {showGroupForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[500px] max-h-[600px] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Create New Group
              </h2>
              <button
                onClick={() => setShowGroupForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateGroup}>
              {/* Group Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Group Name *
                </label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter group name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Select Members */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Select Members * ({selectedMembers.length} selected)
                </label>
                <div className="border border-gray-300 rounded-md p-3 max-h-60 overflow-y-auto">
                  {user?.friends?.length > 0 ? (
                    user.friends.map((friend) => (
                      <div
                        key={friend.id}
                        onClick={() => toggleMemberSelection(friend.name)}
                        className={`p-3 mb-2 rounded-md cursor-pointer flex items-center gap-3 ${
                          selectedMembers.includes(friend.name)
                            ? "bg-blue-100 border border-blue-500"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedMembers.includes(friend.name)}
                          onChange={() => {}}
                          className="w-4 h-4"
                        />
                        <div className="text-2xl">{friend.avatar}</div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {friend.name}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      No friends available. Add friends first!
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowGroupForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
