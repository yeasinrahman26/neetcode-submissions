class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(n1, n2) {
  if (n1.length !== n2.length) {
    return false;
  }
  let n1Sort = n1.split("").sort().join();
  let n2Sort = n2.split("").sort().join();

  if (n1Sort !== n2Sort) {
    return false;
  }
  return true;
}
}
