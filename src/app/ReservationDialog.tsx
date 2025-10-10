'use client'

import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Textarea } from "../components/ui/textarea"
import { X } from "lucide-react"
import { PhoneInput } from "./PhoneInputWithSearch"
import { useState, useRef } from "react"
import { toast } from "sonner"

type ReservationDialogProps = {
  triggerVariant?: "default" | "no-border";
}

export function ReservationDialog({ triggerVariant = "default" }: ReservationDialogProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      const data: Record<string, string | boolean> = {};
      
      // Convert FormData to object, handling special cases
      formData.forEach((value, key) => {
        if (key === "phone") {
          // Ensure phone is always a string, never null
          data[key] = phoneNumber || "";
        } else if (key === "subscribe") {
          // Handle checkbox as boolean
          data[key] = true;
        } else {
          data[key] = value.toString();
        }
      });
      
      // Handle unchecked checkbox (it won't be in FormData)
      if (!formData.has("subscribe")) {
        data["subscribe"] = false;
      }
            
      const response = await fetch('https://console.eleveight.ai/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
      });
      
      // Try to parse response body for better error messages
      let responseText = '';
      let responseJson: Record<string, unknown> | null = null;
      
      try {
        responseText = await response.text();
        if (responseText) {
          responseJson = JSON.parse(responseText);
        }
      } catch {
        console.log('[ReservationDialog] Could not parse response as JSON:', responseText);
      }

      // Check if the request was successful
      if (!response.ok) {
        const errorMessage = responseJson?.message || responseJson?.error || `Request failed with status ${response.status}`;
        toast.error(`Submission failed: ${errorMessage}`);
        return;
      }

      // Success case
      toast.success("Form submitted successfully! We'll contact you soon.");

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
        setPhoneNumber("");
      }

      // Close dialog
      setOpen(false);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`There was an error submitting the form: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant}>Reserve Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] max-h-[80vh] overflow-y-auto bg-[#111] text-white border-0 rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] px-8 pb-8 mt-5">
        <DialogHeader className="sticky top-0 bg-[#111] z-10 pt-10 pb-4 px-4">
          <DialogTitle className="text-[26px] leading-8 font-bold text-center text-white max-w-[450px] m-auto pr-8">
            Contact us to reserve the latest NVIDIA B300 GPU
          </DialogTitle>

          <DialogClose asChild>
            <Button variant="no-border" size="icon" className="absolute right-[-15px] top-[15px] text-[#ccc] hover:text-white" aria-label="Close modal">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        
        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-3 sm:px-12 px-4">
          <div className="grid gap-2">
            <Label htmlFor="firstname" className="text-[#ccc] text-[12px] mb-1">First Name *</Label>
            <Input 
              id="firstname" 
              name="firstname"
              type="text"
              required 
              minLength={2}
              className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastname" className="text-[#ccc] text-[12px] mb-1">Last Name *</Label>
            <Input 
              id="lastname"
              name="lastname" 
              type="text"
              required 
              minLength={2}
              className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email" className="text-[#ccc] text-[12px] mb-1">Email *</Label>
            <Input 
              id="email"
              name="email" 
              type="email" 
              required
              minLength={5}
              className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-[#ccc] text-[12px] mb-1">Phone *</Label>
            <PhoneInput
              name="phone"
              value={phoneNumber}
              onChange={setPhoneNumber}
              international
              defaultCountry="US"
              placeholder="Enter a phone number"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="company_name" className="text-[#ccc] text-[12px] mb-1">Company name</Label>
            <Input 
              id="company_name"
              name="company_name" 
              type="text"
              className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="job_title" className="text-[#ccc] text-[12px] mb-1">Job title</Label>
            <Input 
              id="job_title"
              name="job_title" 
              type="text"
              className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="computer_needs" className="text-[#ccc] text-[12px] mb-1">What are your computer needs? *</Label>
            <Select name="computer_needs" required defaultValue="GPUs: 1-8">
              <SelectTrigger className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="GPUs: 1-8">1-8 GPUs</SelectItem>
                <SelectItem value="GPUs: 8+">8+ GPUs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contract_length" className="text-[#ccc] text-[12px] mb-1">Desired contract length *</Label>
            <Select name="contract_length" required defaultValue="Below 1 Year">
              <SelectTrigger className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="Below 1 Year">Below 1 Year</SelectItem>
                <SelectItem value="More than 1 Year">More than 1 Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="when_need" className="text-[#ccc] text-[12px] mb-1">How soon do you need this? *</Label>
            <Select name="when_need" required defaultValue="Within the next 3 months">
              <SelectTrigger className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="Within the next 3 months">Within the next 3 months</SelectItem>
                <SelectItem value="More than 3 months">More than 3 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="main_workload" className="text-[#ccc] text-[12px] mb-1">What is your main workload? *</Label>
            <Select name="main_workload" required defaultValue="Model training">
              <SelectTrigger className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="Model training">Model training</SelectItem>
                <SelectItem value="Inference">Inference</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="additional" className="text-[#ccc] text-[12px] mb-1">Additional information</Label>
            <Textarea 
              id="additional"
              name="comment" 
              rows={4}
              className="bg-[#323135] border-transparent text-[#ADADAD] rounded-[6px] resize-none focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="flex items-start gap-2 text-[#ADADAD] text-sm leading-5 mb-5">
            <Checkbox id="agreement" name="subscribe" defaultChecked className="mt-1 h-[18px] w-[18px]" />
            <Label htmlFor="agreement" className="text-sm text-[#ADADAD] cursor-pointer leading-tight">
              I agree to receive other communications from Eleveight AI
            </Label>
          </div>

          <Button type="submit" variant="default-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>

        <p className="text-[12px] font-normal leading-4 text-white/90 text-center px-5">
          *By clicking submit above, you consent to allow Eleveight.AI to store and process the personal information submitted above to provide you the content requested.
        </p>
      </DialogContent>
    </Dialog>
  )
}
