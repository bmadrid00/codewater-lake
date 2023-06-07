import { React, useState } from "react";
import ReservationForm from "./ReservationForm";
import ResCalendar from "./ResCalendar";

function ReservationPage() {
    const [selectedDates, setSelectedDates] = useState({
        start_date: '',
        end_date: ''
    });

    const handleDateSelect = (selectInfo) => {
        const endDateObj = new Date(selectInfo.endStr);
        endDateObj.setDate(endDateObj.getDate() - 1);
        const adjustedEndDate = endDateObj.toISOString().split("T")[0]
        setSelectedDates({
            start_date: selectInfo.startStr,
            end_date: adjustedEndDate,
        });
    }

    return (
        <div>
            <ReservationForm selectedDates={selectedDates} />
            <ResCalendar onDateSelect={handleDateSelect}/>
        </div>
    );
}

export default ReservationPage;
