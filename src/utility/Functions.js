import { Api } from "@/api/config";

export const ListToMatrix = (list, elementsPerSubArray) => {
  var matrix = [],
    i,
    k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
};
export const imageLoader = ({ src, width, quality }) => {
  return `${Api.baseImageUrl}${src}?w=${width}&q=${quality || 75}`;
};
export const SlugGenerator = (title) => title.split(" ").join("_");

export const decodeTitleAndId = (slug = "") => {
  let slugArray = slug.split("_");
  let id = slugArray[slugArray.length - 1];
  let title = decodeURIComponent(slugArray.splice(0, slugArray.length - 1))
    .split(",")
    .join(" ");
  return { id, title };
};

export const flatToTree = (flatArray) => {
  // Store the root nodes of the tree

  const result = [];

  // Use reduce to create a nodeMap
  const nodeMap = flatArray.reduce((acc, item) => {
    acc[item.id] = { ...item, children: [] };
    return acc;
  }, {});

  // Iterate through flatArray to build the tree
  flatArray.forEach((item) => {
    if (item.parent_id === null) {
      result.push(nodeMap[item.id]);
    } else {
      nodeMap[item.parent_id].children.push(nodeMap[item.id]);
    }
  });

  return result;
};
