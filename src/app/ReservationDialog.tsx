'use client';

import { Button } from "assets/components/ui/button";
import { useState } from "react";

interface ReservationDialogProps {
  trigger?: React.ReactNode;
  variant?: "default" | "default_no_border" | "hero";
}

export const ReservationDialog = ({ trigger, variant = "default" }: ReservationDialogProps) => {
  const [phoneValue, setPhoneValue] = useState<string>();
  
  return (
    <Button variant="default">Reserve Now</Button>
    // <Dialog>
    //   <DialogTrigger asChild>
    //     {trigger || <Button>Reserve Now</Button>}
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[540px] max-h-[80vh] overflow-y-auto bg-[#111] text-white border-0">
    //     <DialogHeader className="sticky top-0 bg-[#111] z-10 pt-10 pb-4">
    //       <DialogTitle className="text-2xl font-bold text-center text-white">
    //         Contact us to reserve the latest NVIDIA B300 GPU
    //       </DialogTitle>
    //     </DialogHeader>
        
    //     <form className="grid gap-4 px-2 pb-4">
    //       <div className="grid gap-2">
    //         <Label htmlFor="firstname" className="text-white">First Name *</Label>
    //         <Input 
    //           id="firstname" 
    //           name="firstname"
    //           type="text"
    //           required 
    //           minLength={2}
    //           className="bg-[#2a2a2a] border-[#444] text-white rounded-lg"
    //         />
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="lastname" className="text-white">Last Name *</Label>
    //         <Input 
    //           id="lastname"
    //           name="lastname" 
    //           type="text"
    //           required 
    //           minLength={2}
    //           className="bg-[#2a2a2a] border-[#444] text-white rounded-lg"
    //         />
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="email" className="text-white">Email *</Label>
    //         <Input 
    //           id="email"
    //           name="email" 
    //           type="email" 
    //           required
    //           minLength={5}
    //           className="bg-[#2a2a2a] border-[#444] text-white rounded-lg"
    //         />
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="phone" className="text-white">Phone *</Label>
    //         <PhoneInputWithSearch
    //           value={phoneValue}
    //           onChange={setPhoneValue}
    //           required
    //         />
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="company_name" className="text-white">Company name</Label>
    //         <Input 
    //           id="company_name"
    //           name="company_name" 
    //           type="text"
    //           className="bg-[#2a2a2a] border-[#444] text-white rounded-lg"
    //         />
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="job_title" className="text-white">Job title</Label>
    //         <Input 
    //           id="job_title"
    //           name="job_title" 
    //           type="text"
    //           className="bg-[#2a2a2a] border-[#444] text-white rounded-lg"
    //         />
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="computer_needs" className="text-white">What are your computer needs? *</Label>
    //         <Select name="computer_needs" required>
    //           <SelectTrigger className="bg-[#2a2a2a] border-[#444] text-white rounded-lg">
    //             <SelectValue placeholder="Select..." />
    //           </SelectTrigger>
    //           <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
    //             <SelectItem value="GPUs: 1-8">1-8 GPUs</SelectItem>
    //             <SelectItem value="GPUs: 8+">8+ GPUs</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="contract_length" className="text-white">Desired contract length *</Label>
    //         <Select name="contract_length" required>
    //           <SelectTrigger className="bg-[#2a2a2a] border-[#444] text-white rounded-lg">
    //             <SelectValue placeholder="Select..." />
    //           </SelectTrigger>
    //           <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
    //             <SelectItem value="Below 1 Year">Below 1 Year</SelectItem>
    //             <SelectItem value="More than 1 Year">More than 1 Year</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="when_need" className="text-white">How soon do you need this? *</Label>
    //         <Select name="when_need" required>
    //           <SelectTrigger className="bg-[#2a2a2a] border-[#444] text-white rounded-lg">
    //             <SelectValue placeholder="Select..." />
    //           </SelectTrigger>
    //           <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
    //             <SelectItem value="Within the next 3 months">Within the next 3 months</SelectItem>
    //             <SelectItem value="More than 3 months">More than 3 months</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="main_workload" className="text-white">What is your main workload? *</Label>
    //         <Select name="main_workload" required>
    //           <SelectTrigger className="bg-[#2a2a2a] border-[#444] text-white rounded-lg">
    //             <SelectValue placeholder="Select..." />
    //           </SelectTrigger>
    //           <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
    //             <SelectItem value="Model training">Model training</SelectItem>
    //             <SelectItem value="Inference">Inference</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>

    //       <div className="grid gap-2">
    //         <Label htmlFor="additional" className="text-white">Additional information</Label>
    //         <Textarea 
    //           id="additional"
    //           name="comment" 
    //           rows={5}
    //           className="bg-[#2a2a2a] border-[#444] text-white rounded-lg resize-none"
    //         />
    //       </div>

    //       <div className="flex items-start gap-2">
    //         <Checkbox id="agreement" name="subscribe" defaultChecked className="mt-1" />
    //         <Label htmlFor="agreement" className="text-sm text-white cursor-pointer leading-tight">
    //           I agree to receive other communications from Eleveight AI
    //         </Label>
    //       </div>

    //       <Button type="submit" className="w-full mt-2">
    //         Submit
    //       </Button>
    //     </form>
    //   </DialogContent>
    // </Dialog>
  );
};