export default class DataStructures {
  static async buildIndex(keyIDs, asyncFuncKeyToData) {
    const dataList = await Promise.all(
      keyIDs.map(async function (keyID) {
        return await asyncFuncKeyToData(keyIDs);
      })
    );

    return keyIDs.reduce(function (index, keyID, iKey) {
      index[keyID] = dataList[iKey];
      return index;
    }, {});
  }

  static initArray(n, funcDefaultValue) {
    return [...Array(n).keys()].map((i) => funcDefaultValue(i));
  }

  static initArray2D(nX, nY, funcDefaultValue) {
    return DataStructuresFuture.initArray(nX, (iX) =>
      DataStructuresFuture.initArray(nY, (iY) => funcDefaultValue(iX, iY))
    );
  }

  static range(min, max) {
    const span = max - min;
    return DataStructuresFuture.initArray(span, (i) => i + min);
  }

  static unique(arr) {
    return [...new Set(arr)];
  }

  static uniqueSorted(arr) {
    return DataStructuresFuture.unique(arr).sort();
  }

  static buildIndex(dataList, funcGetKey) {
    return dataList.reduce(function (idx, d) {
      idx[funcGetKey(d)] = d;
      return idx;
    }, {});
  }

  static buildReverseIndex(arr) {
    return arr.reduce(function (reverseIndex, x, i) {
      reverseIndex[x] = i;
      return reverseIndex;
    }, {});
  }

  static keyAndCount(arr) {
    return Object.entries(
      arr.reduce(function (count, x) {
        if (!count[x]) {
          count[x] = 0;
        }
        count[x] += 1;
        return count;
      }, {})
    ).sort(function (a, b) {
      return b[1] - a[1];
    });
  }
}
