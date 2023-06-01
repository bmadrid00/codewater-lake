import { React, useState } from "react";
import ReservationForm from "./ReservationForm";
import ResCalendar from "./ResCalendar";

function ReservationPage() {
    const [selectedDates, setSelectedDates] = useState({
        start_date: '',
        end_date: ''
    });


    const handleDateSelect = (selectInfo) => {
            setSelectedDates({
                start_date: selectInfo.startStr,
                end_date: selectInfo.endStr,
            });
            console.log(selectedDates)
        }

    return (
        <div>
            <ReservationForm selectedDates={selectedDates} />
            <ResCalendar onDateSelect={handleDateSelect}/>
        </div>
    );
}

export default ReservationPage;
