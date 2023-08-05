import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { expect, test } from "vitest";
import { useDisclosure } from "../useDisclosure";

test("should open the state", () => {
  const { result } = renderHook(() => useDisclosure());

  expect(result.current.isOpen).toBeFalsy();

  act(() => {
    result.current.open();
  });

  expect(result.current.isOpen).toBeTruthy();
});

test("should close the state", () => {
  const { result } = renderHook(() => useDisclosure());

  expect(result.current.isOpen).toBeFalsy();

  act(() => {
    result.current.close();
  });

  expect(result.current.isOpen).toBeFalsy();
});

test("should toggle the state", () => {
  const { result } = renderHook(() => useDisclosure());

  expect(result.current.isOpen).toBeFalsy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBeTruthy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBeFalsy();
});

test("should define initial state", () => {
  const { result } = renderHook(() => useDisclosure(true));

  expect(result.current.isOpen).toBeTruthy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBeFalsy();
});
