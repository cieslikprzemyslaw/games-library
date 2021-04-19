import { useMemo, useState } from "react";

/**
 * Hook implementing pagination logic.
 * @param data Any list.
 * @param volume Amount of items per page.
 * @param initialPage Page set on first render.
 */
export const usePagination = <T extends any>(
  data: T[],
  volume: number = 10
) => {
  /** All pages in total. */
  const totalPages = useMemo(() => Math.floor(data.length / volume), [
    volume,
    data.length,
  ]);
  const [page, setPage] = useState(0);
  /** Data representing one single page. */
  const slicedData = useMemo(
    () => data.slice(page * volume, page * volume + volume),
    [volume, page]
  );

  return { data: slicedData, page, totalPages, setPage };
};
