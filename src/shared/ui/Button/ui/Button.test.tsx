import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react'; // 👈 Import 'screen' for querying
import Button from "./Button";

describe('Button', () => {
  test(' render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument(); 
  });
   test(' handelClick', () => {
    const handelClick = vi.fn() ;
    render(<Button onClick={handelClick}>test</Button>);
    fireEvent.click(screen.getByText("test"))
    expect(handelClick).toHaveBeenCalledTimes(1); 
  });
    test(' applies disable', () => {
    render(<Button disabled>test</Button>);
    expect(screen.getByText("test")).toBeDisabled(); 
  });

});