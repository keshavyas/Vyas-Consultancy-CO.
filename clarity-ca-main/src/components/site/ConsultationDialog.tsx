import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { EnquiryForm } from "./EnquiryForm";

export function ConsultationDialog({
  open,
  onOpenChange,
  service,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: string | undefined;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto rounded-none border-border bg-card p-6">
        <DialogHeader className="text-left">
          <DialogTitle className="font-serif text-xl font-medium">Request a Consultation</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Share a few details and your requirement will be reviewed.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm
          key={service ?? "general"}
          defaultService={service ?? ""}
          compact
          submitLabel="Send Enquiry"
        />
      </DialogContent>
    </Dialog>
  );
}
