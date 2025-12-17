import Image from "next/image";
import { paymentMethods } from "@/shared/constants/footer";

export function FooterCopyright() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-300">
      <p className="text-sm text-gray-600">
        Shop.co © 2000-2023, All Rights Reserved
      </p>
      <div className="flex items-center gap-2">
        {paymentMethods.map((method) => (
          <Image
            key={method.name}
            src={`/payment/${method.icon}`}
            alt={method.name}
            width={40}
            height={24}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
