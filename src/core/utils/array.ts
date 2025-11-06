import _ from "lodash";

/**
 * @param list any[]
 * @returns objects of function to handle a list
 * @returns push: push element into list,
 * @returns filter: filter list by callback,
 * @returns update: update element at index,
 * @returns remove: remove element at index,
 * @returns clear: clear list
 */

export function handleArray(list: any[]) {
  return {
    /**
     * @param element any
     * @returns new list
     * @description push element into list
     */
    push(element: any) {
      list.push(...element);
      return list;
    },
    /**
     * @param callback any
     * @returns new list
     * @description filter list by callback
     */
    filter(callback: any) {
      return list.filter(callback);
    },
    /**
     * @param index number
     * @param newElement any
     * @returns new list
     * @description update element at index
     */
    update(index: number, newElement: any) {
      list[index] = newElement;
      return list;
    },
    /**
     * @param index number
     * @returns new list
     * @description remove element at index
     */
    remove(index: number) {
      list.splice(index, 1);
      return list;
    },
    /**
     * @returns new list
     * @description clear list
     */
    clear() {
      list.splice(0, list.length);
      return list;
    },
  };
}

/**
 * @param list any[ ]: is array of object
 * @param field string
 * @returns [
 *  {
 *    groupBy: field,
 *    groupKey: field value,
 *    groupValue: field value,
 *    groupItems:  any[],
 *  }
 * ]
 * @description group list by specific field
 */
export function groupListByField({
  list,
  field,
}: {
  list: any[];
  field: string;
}) {
  const newList: any[] = [];

  const isFieldValid = !!list.find((item) => !!item[field]);

  if (!isFieldValid) {
    return [];
  }

  // Create unique list of field
  const uniqueFields = _.uniqBy(list, field).map((item: any) => item[field]);

  // Return new list with items for each groupBy field
  for (let uniqueField of uniqueFields) {
    const groupItems = list.filter((item) => item[field] === uniqueField);
    newList.push({
      groupBy: field,
      groupKey: uniqueField,
      groupValue: uniqueField,
      groupItems,
    });
  }

  return newList;
}

type ListType = "default" | "array" | "object" | undefined;
/**
 * @param list
 * @param field
 * @param sortType "asc" | "desc", default is "asc"
 * @returns object { isListValid, field, sortType, list }
 * @description only work on number list, string list & object list
 */
export function sortList({
  list,
  field = "",
  sortType = "asc",
}: {
  list: any[];
  field?: string;
  sortType?: "asc" | "desc";
}) {
  let isListValid = true;
  let listType: ListType = "default";
  let listItemType: ListType[] = [];
  let sortedList: any[] = [...list];

  // Get type of each item in list
  for (const listItem of list) {
    if (!listItem) {
      listItemType.push(undefined);
      continue;
    }
    if (Array.isArray(listItem)) {
      listItemType.push("array");
      continue;
    }
    if (typeof listItem === "object") {
      listItemType.push("object");
      continue;
    }
    listItemType.push("default");
  }

  // Check whether list is valid or not
  listType = listItemType[0];
  isListValid =
    listItemType.filter((item) => item === listType).length === list.length &&
    listType !== "array";

  if (!isListValid) {
    return { isListValid, list: [] };
  }

  // Sort list
  sortedList.sort((a, b) => {
    let firstValue = String(listType === "object" ? a[field] : a).toLowerCase();
    let secondValue = String(
      listType === "object" ? b[field] : b
    ).toLowerCase();

    if (firstValue < secondValue) {
      return sortType == "asc" ? -1 : 1;
    }

    if (firstValue > secondValue) {
      return sortType == "asc" ? 1 : -1;
    }

    return 0;
  });

  return { isListValid, field, sortType, list: sortedList };
}
