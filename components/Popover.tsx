"use client";

import React from "react";
import * as Popover from "@radix-ui/react-popover";

const PopoverButton = () => (
  <Popover.Root>
    <Popover.Trigger className="bg-transparent font-medium hover:border-black border hover:transition-colors shadow-sm duration-150 hover:text-black py-2 px-4 rounded">
      More info
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="transition bg-black text-white rounded-lg sideOffset={5}">
        sdadas
        <Popover.Arrow className="fill-black" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverButton;
