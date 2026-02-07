import UserInfo from "./UserInfo";

UserInfo;
const ProfileCard = ({ obj, sayHello }) => {
  return (
    <div className="h-[40vh] w-[95%] border rounded px-5 py-5 mt-3">
      <h1 className="text-3xl">Profile Card</h1>
      <UserInfo obj={obj} sayHello={sayHello} />
    </div>
  );
};

export default ProfileCard;
