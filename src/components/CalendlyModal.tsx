import { InlineWidget } from "react-calendly";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CALENDLY_URL } from "@/config/calendly";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl w-[95vw] h-[85vh] max-h-[700px] p-0 overflow-hidden">
      <DialogHeader className="px-6 pt-5 pb-2">
        <DialogTitle className="text-xl font-bold">Agendá tu llamada gratuita</DialogTitle>
        <DialogDescription>
          Elegí el día y horario que te quede mejor. Recibirás la confirmación por email con el link de Google Meet.
        </DialogDescription>
      </DialogHeader>
      <div className="flex-1 overflow-y-auto px-2 pb-2" style={{ minHeight: 0 }}>
        <InlineWidget
          url={CALENDLY_URL}
          styles={{ height: "100%", minHeight: "550px" }}
          pageSettings={{
            hideLandingPageDetails: true,
            hideEventTypeDetails: true,
            primaryColor: "1a9cac",
          }}
        />
      </div>
    </DialogContent>
  </Dialog>
);

export default CalendlyModal;
