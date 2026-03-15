import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../services/api";

export const useProducts = () => {
  const queryClient = useQueryClient();

  // Fetch all products
  const {
    data: products = [],
    isLoading: isFetching,
    error: fetchError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: api.getProducts,
  });

  // Create a product
  const createMutation = useMutation({
    mutationFn: api.createProduct,
    onSuccess: (newProduct) => {
      queryClient.setQueryData(["products"], (old) => [
        ...(old || []),
        newProduct,
      ]);
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Update a product
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateProduct(id, data),
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(["products"], (old) =>
        (old || []).map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        )
      );
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Delete a product
  const deleteMutation = useMutation({
    mutationFn: api.deleteProduct,
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products"], (old) =>
        (old || []).filter((p) => p.id !== id)
      );
      queryClient.invalidateQueries(["products"]);
    },
  });

  return {
    products,
    isFetching,
    fetchError: fetchError?.message,
    createProduct: createMutation.mutate,
    isCreating: createMutation.isPending,
    updateProduct: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
    deleteProduct: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
  };
};
