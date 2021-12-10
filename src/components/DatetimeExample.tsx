import React, { useState, useRef } from 'react';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonDatetime,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonPopover,
    IonText
} from '@ionic/react';
import { calendar } from 'ionicons/icons';
import { format, parseISO } from 'date-fns';

export const DateTimeExamples: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState('2012-12-15T13:47:20.789');
    const [popoverDate, setPopoverDate] = useState('');
    const [popoverDate2, setPopoverDate2] = useState('');

    const customDatetime = useRef();
    const confirm = () => {
        if (customDatetime === undefined) return;

        // customDatetime.confirm();
    };

    const reset = () => {
        if (customDatetime === undefined) return;

        // customDatetime.reset();
    };

    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };

    return (
        <IonContent>
            {/* Initial value */}
            <IonDatetime value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>

            {/* Datetime in overlay */}
            <IonButton id="open-modal">Open Datetime Modal</IonButton>
            <IonModal trigger="open-modal">
                <IonContent>
                    <IonDatetime></IonDatetime>
                </IonContent>
            </IonModal>

            {/* Datetime in popover with cover element */}
            <IonItem button={true} id="open-date-input">
                <IonLabel>Date</IonLabel>
                <IonText slot="end">{popoverDate}</IonText>
                <IonPopover trigger="open-date-input" showBackdrop={false}>
                    <IonDatetime
                        presentation="date"
                        onIonChange={ev => setPopoverDate(formatDate(ev.detail.value!))}
                    />
                </IonPopover>
            </IonItem>

            {/* Datetime in popover with input */}
            <IonItem>
                <IonInput id="date-input-2" value={popoverDate2} />
                <IonButton fill="clear" id="open-date-input-2">
                    <IonIcon icon={calendar} />
                </IonButton>
                <IonPopover trigger="open-date-input-2" showBackdrop={false}>
                    <IonDatetime
                        presentation="date"
                        onIonChange={ev => setPopoverDate2(formatDate(ev.detail.value!))}
                    />
                </IonPopover>
            </IonItem>
        </IonContent>
    )
}

export default DateTimeExamples;