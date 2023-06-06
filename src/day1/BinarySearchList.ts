export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length;
    let lo = 0;
    let middle = Math.floor(lo + (hi - lo) / 2);
    let v = haystack[middle];

    if (lo >= hi) {
        return false;
    }

    if (v === needle) {
        return true;
    } else if (v < needle) {
        lo = middle + 1;
    } else {
        hi = middle;
    }

    return bs_list(haystack.slice(lo, hi), needle);
}
