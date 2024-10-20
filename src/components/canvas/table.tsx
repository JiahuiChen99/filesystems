import * as React from "react";

import { cn } from "@/lib/utils";

const CanvasTableComponent = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        "w-full border-separate border-spacing-1 caption-bottom text-sm",
        className
      )}
      {...props}
    />
  </div>
));
CanvasTableComponent.displayName = "CanvasTableComponent";

const CanvasTableComponentHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
CanvasTableComponentHeader.displayName = "CanvasTableComponentHeader";

const CanvasTableComponentBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
CanvasTableComponentBody.displayName = "CanvasTableComponentBody";

const CanvasTableComponentFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
CanvasTableComponentFooter.displayName = "CanvasTableComponentFooter";

const CanvasTableComponentRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border rounded-lg transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
CanvasTableComponentRow.displayName = "CanvasTableComponentRow";

const CanvasTableComponentHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
CanvasTableComponentHead.displayName = "CanvasTableComponentHead";

const CanvasTableComponentCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "border-spacing-0 border p-1 rounded-sm align-middle [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  ></td>
));
CanvasTableComponentCell.displayName = "CanvasTableComponentCell";

const CanvasTableComponentCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
CanvasTableComponentCaption.displayName = "CanvasTableComponentCaption";

export {
  CanvasTableComponent,
  CanvasTableComponentBody,
  CanvasTableComponentCaption,
  CanvasTableComponentCell,
  CanvasTableComponentFooter,
  CanvasTableComponentHead,
  CanvasTableComponentHeader,
  CanvasTableComponentRow,
};
