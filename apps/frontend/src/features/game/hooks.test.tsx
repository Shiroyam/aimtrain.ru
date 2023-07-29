import { describe, expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useAim } from "./hooks";

describe("useAim", () => {
  test("should start the game and generate dots", async () => {
    const { result } = renderHook(() => useAim(5, 500, "red", 10));

    expect(result.current.start).toBe(false);
    expect(result.current.dots.length).toBe(0);

    act(() => {
      result.current.onStart();
    });
    await new Promise((r) => setTimeout(r, 1100));

    expect(result.current.start).toBe(true);
    expect(result.current.dots.length).toBe(2);
  });

  test("should increase the miss count when a dot is missed", () => {
    const { result } = renderHook(() => useAim(3, 500, "red", 10));

    act(() => {
      result.current.onStart();
    });

    expect(result.current.miss).toBe(0);

    act(() => {
      result.current.onMiss();
    });

    expect(result.current.miss).toBe(1);

    act(() => {
      result.current.onMiss();
      result.current.onMiss();
    });

    expect(result.current.miss).toBe(3);
  });

  test("should increase the result when a dot is hit", async () => {
    const { result } = renderHook(() => useAim(3, 500, "red", 10));
    const { getByTestId } = render(
      <button onClick={(e) => result.current.onHit(0, e)} data-testid="my-button" />,
    );
    const button = getByTestId("my-button");

    act(() => {
      result.current.onStart();
    });

    await new Promise((r) => setTimeout(r, 1100));

    expect(result.current.result).toBe(0);

    fireEvent.click(button);

    expect(result.current.result).toBe(1);
  });

  test("should stop the game and reset state", async () => {
    const { result } = renderHook(() => useAim(5, 500, "red", 10));

    act(() => {
      result.current.onStart();
    });

    await new Promise((r) => setTimeout(r, 1100));
    expect(result.current.start).toBe(true);
    expect(result.current.dots.length).toBe(2);

    act(() => {
      result.current.onReset();
    });

    expect(result.current.start).toBe(false);
    expect(result.current.dots.length).toBe(0);
  });
});
