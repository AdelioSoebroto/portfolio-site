"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import type { SearchItem } from "@/lib/searchIndex";

const GROUP_ORDER: SearchItem["group"][] = ["Pages", "Roadmap", "Case Studies", "Blog", "Links"];

export function CommandPalette({ items }: { items: SearchItem[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    function onOpenRequest() {
      setOpen(true);
    }
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenRequest);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenRequest);
    };
  }, []);

  function handleSelect(item: SearchItem) {
    setOpen(false);
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Site search"
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-6"
      shouldFilter
    >
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="relative w-full max-w-lg rounded-2xl bg-[var(--nav-blur-bg)] backdrop-blur-xl border border-hairline shadow-xl overflow-hidden">
        <Command.Input
          autoFocus
          placeholder="Search pages, projects, posts…"
          className="w-full px-4 py-3.5 text-[15px] bg-transparent outline-none border-b border-hairline placeholder:text-muted"
        />
        <Command.List className="max-h-[50vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-[14px] text-muted">
            No results found.
          </Command.Empty>
          {GROUP_ORDER.map((group) => {
            const groupItems = items.filter((i) => i.group === group);
            if (groupItems.length === 0) return null;
            return (
              <Command.Group
                key={group}
                heading={group}
                className="px-1 py-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:uppercase"
              >
                {groupItems.map((item) => (
                  <Command.Item
                    key={item.id}
                    value={`${item.title} ${item.subtitle ?? ""}`}
                    onSelect={() => handleSelect(item)}
                    className="px-3 py-2.5 rounded-lg text-[14px] cursor-pointer data-[selected=true]:bg-surface flex flex-col"
                  >
                    <span>{item.title}</span>
                    {item.subtitle && (
                      <span className="text-[12px] text-muted">{item.subtitle}</span>
                    )}
                  </Command.Item>
                ))}
              </Command.Group>
            );
          })}
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
