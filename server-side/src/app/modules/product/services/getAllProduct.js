import {calculatePagination} from "../../../../utils/pagination.js";
import {Product} from "../product.model.js";
import {productSearchableFields} from "../product.utils.js";

//-----get all product
export const getAllProductService = async (filters, paginationOptions) => {
  const {page, limit, skip, sortBy, sortOrder} = calculatePagination(paginationOptions);
  //sorting
  const sortConditions = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //search
  const {search, ...filtersData} = filters;
  const andconditions = [];
  if (search) {
    andconditions.push({
      $or: productSearchableFields.map((field) => ({
        [field]: {
          $regex: search,
          $options: "i",
        },
      })),
    });
  }
  //filtering
  if (Object.keys(filtersData).length > 0) {
    andconditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        return {[field]: value};
      }),
    });
  }
  const whereCondition = andconditions?.length > 0 ? {$and: andconditions} : {};
  const products = await Product.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .populate({
      path: "versions",
      populate: {
        path: "versionID",
      },
    })
    .populate({
      path: "addedBy",
    });
  return {
    meta: {
      page,
      limit,
    },
    data: products,
  };
};
