'use client';
import { useState } from 'react';
import InputField from "@/components/ui/input";
import TextArea from "@/components/ui/text-field";
import { IoIosSend } from "react-icons/io";
import SelectField from "@/components/ui/select";
import Button from "@/components/ui/button";
import border from "@/styles/components/button.module.css";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "cb111c8c-cc52-428d-a6ff-a2fccec5fd5c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <form className='flex py-10 gap-5 flex-wrap' onSubmit={onSubmit}>
            <InputField
                label="Full Name"
                name="name"
            />

            <InputField
                label="Phone Number (I'm not going to call you)"
                name="phone"
            />

            <InputField
                label="Email Address"
                name="email"
            />

            <InputField
                label="Confirm Email Address"
                name="confirm_email"
            />

            <InputField
                label="Appointment City"
                name="Appoint City"
            />

            <SelectField
                label="Duration"
                name="duration"
                options={[
                    { value: "1H", label: "1H" },
                    { value: "2H", label: "2H" },
                    { value: "3H", label: "3H" },
                    { value: "4H", label: "4H" },
                    { value: "Overnight", label: "Overnight" },
                    { value: "24H", label: "24H" },
                ]}
            />

            <InputField
                label="Preferred Date"
                type="date"
                name="preferred_date"
            />

            <SelectField
                label="Screening ID"
                name="screening_id"
                options={[
                    { value: "Selfie + ID/DL", label: "Selfie + ID/DL" },
                    { value: "LinkedIn profile", label: "LinkedIn profile" },
                ]}
            />

            <SelectField
                label="Preferred Payment Method"
                name="payment_method"
                options={[
                    { value: "Bitcoin (BTC)", label: "Bitcoin (BTC)" },
                    { value: "Venmo", label: "Venmo" },
                    { value: "Bank Transfer", label: "Bank Transfer" },
                    { value: "Gift Card", label: "Gift Card" },
                    { value: "Apple Pay", label: "Apple Pay" },
                    { value: "E-Transfer", label: "E-Transfer" },
                ]}
            />

            <TextArea
                label="Your Inquiry Message"
                name="inquiry_message"
                className="min-h-30"
            />

            <div className="w-full flex justify-end">
                <Button
                    type="submit"
                    label="SEND MESSAGE"
                    title="SEND MESSAGE"
                    icon={<IoIosSend />}
                    className={`bg-[var(--primary-color)] text-white rounded-[5px] ${border.buttonBorder}`}
                />
            </div>

            {result && <p className="w-full text-center mt-4 text-green-500">{result}</p>}
        </form>
    );
}