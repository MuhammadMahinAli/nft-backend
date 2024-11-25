export const sortingHelper = (options) => {
  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";
  return {
    sortBy,
    sortOrder,
  };
};
//
export const sortingFields = ["sortBy", "sortOrder"];
