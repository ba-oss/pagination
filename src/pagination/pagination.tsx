import { useMemo, useState } from "react";
import { getPaginationModel, ITEM_TYPES } from "ultimate-pagination";
import * as Popover from "@radix-ui/react-popover";
import {
  Container,
  Action,
  Page,
  PageContainer,
  PopoverContent,
  PopoverPage,
} from "./styles";
import { expandIcon, nextIcon, previousIcon } from "./icons";

type Props = {
  initialPage: number;
  pageCount: number;
  onPageChange(page: number): void;
};

function Pagination({ initialPage, pageCount, onPageChange }: Props) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const pages = useMemo(
    () =>
      getPaginationModel({
        currentPage,
        totalPages: pageCount,
        hideFirstAndLastPageLinks: true,
        hidePreviousAndNextPageLinks: true,
      }),
    [currentPage, pageCount]
  );

  const changePage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  const previousPage = () => changePage(currentPage - 1);
  const nextPage = () => changePage(currentPage + 1);

  return (
    <Container>
      <Action disabled={currentPage === 1} onClick={previousPage}>
        {previousIcon}
      </Action>

      <PageContainer>
        {pages.map((page, i) => {
          // page type
          if (page.type === ITEM_TYPES.PAGE) {
            return (
              <Page
                key={page.key}
                aria-current={page.isActive}
                onClick={() => changePage(page.value)}
              >
                {page.value}
              </Page>
            );
          }

          // expand pages menu type
          const start = pages[i - 1].value + 1;
          const end = pages[i + 1].value;

          return (
            <ExpandPages
              key={page.key}
              start={start}
              end={end}
              onSelect={changePage}
            />
          );
        })}
      </PageContainer>

      <Action disabled={currentPage === pageCount} onClick={nextPage}>
        {nextIcon}
      </Action>
    </Container>
  );
}

function ExpandPages({
  start,
  end,
  onSelect,
}: {
  start: number;
  end: number;
  onSelect(page: number): void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root modal open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Action>{expandIcon}</Action>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent side="top" align="center" sideOffset={-8}>
          {new Array(end - start).fill(1).map((_, i) => (
            <PopoverPage
              key={i}
              onClick={() => {
                setOpen(false);
                onSelect(i + start);
              }}
            >
              {i + start}
            </PopoverPage>
          ))}
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}

export { Pagination };
