import { CarTaxiFront } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="border h-15 flex justify-end items-center px-10 gap-5">
      <span>
        <Link className="text-bold" to="/">Shop</Link>
      </span>
      <span>
        <Link to="/cart">
          <CarTaxiFront />
        </Link>
      </span>
    </div>
  );
}

