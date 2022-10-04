import styled, { css } from "styled-components";
import * as PopoverPrimitive from "@radix-ui/react-popover";

const colors = css`
  --neutral-white: #ffffff;
  --neutral-black: #222222;
  --neutral-black-25: #d9d9d9;
  --neutral-black-50: #9b9b9b;
  --inactive-main: #a7d2ba;
  --primary-main: #0b7d3e;
  --bg-main: #e6f2eb;
`;
const Container = styled.div`
  ${colors}

  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const PageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
const Page = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  padding: 0;
  border: 2px solid var(--neutral-black-25);
  border-radius: 4px;

  box-sizing: border-box;
  background-color: var(--neutral-white);
  cursor: pointer;
  color: var(--neutral-black);
  text-align: center;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    border-color: var(--primary-main);
  }
  &[aria-current="true"] {
    border-color: var(--primary-main);
    background-color: var(--bg-main);
  }
`;

const Action = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 32px;

  background-color: var(--neutral-white);
  border: none;
  cursor: pointer;

  & > svg[data-variant="stroke"] {
    stroke: var(--primary-main);
  }
  & > svg[data-variant="fill"] {
    fill: var(--neutral-black-25);
  }

  &:hover {
    background-color: var(--bg-main);

    & > svg[data-variant="fill"] {
      fill: var(--primary-main);
    }
  }

  &:disabled {
    background-color: var(--neutral-white);
    cursor: not-allowed;

    & > svg[data-variant="stroke"] {
      stroke: var(--inactive-main);
    }
  }
`;

const PopoverContent = styled(PopoverPrimitive.Content)`
  ${colors}

  width: 64px;
  max-height: 288px;
  border-radius: 8px;
  overflow-y: auto;

  background-color: var(--neutral-white);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);

  /** Firefox */
  scrollbar-color: var(--neutral-black-50) var(--neutral-white);
  scrollbar-width: 8px;
  /** Chrome */
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: var(--neutral-white);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--neutral-black-50);
    opacity: 0.7;
    border-radius: 30px;
    border-right: 2px solid var(--neutral-white);
  }
`;

const PopoverPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;

  color: var(--neutral-black);
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background: var(--bg-main);
  }
`;

export { Container, PageContainer, Page, Action, PopoverContent, PopoverPage };
