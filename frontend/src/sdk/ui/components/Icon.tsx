/*
 * Notifo.io
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
 */

/** @jsx h */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { h } from 'preact';

export type IconType =
    'alarm_off' |
    'alarm' |
    'back' |
    'bell_off' |
    'bell' |
    'chat' |
    'chat_filled' |
    'delete' |
    'heart_off' |
    'heart' |
    'logo' |
    'loader' |
    'message' |
    'notifo' |
    'profile' |
    'settings' |
    'star_off' |
    'star';

export interface IconProps {
    // The icon type.
    type: IconType;

    // The size of the icon.
    size: number;
}

export const Icon = ({ size, type }: IconProps) => {
    switch (type) {
        case 'message':
            return (
                <svg width='24' viewBox='0 0 24 24'>
                    <path d='M18 8.016v-2.016h-12v2.016h12zM18 11.016v-2.016h-12v2.016h12zM18 14.016v-2.016h-12v2.016h12zM20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z'></path>
                </svg>
            );
        case 'alarm_off':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M8.016 3.281l-0.844 0.703-1.453-1.406 0.891-0.703zM16.453 18.375l-9.844-9.844q-1.594 1.969-1.594 4.453 0 2.906 2.039 4.969t4.945 2.063q2.438 0 4.453-1.641zM2.906 2.297q3.563 3.563 10.148 10.125t8.32 8.297l-1.266 1.266-2.203-2.203q-2.578 2.203-5.906 2.203-3.75 0-6.375-2.648t-2.625-6.352q0-1.359 0.656-3.094t1.547-2.766l-0.797-0.797-1.125 0.938-1.406-1.453 1.125-0.891-1.359-1.359zM21.984 5.719l-1.266 1.547-4.594-3.891 1.266-1.5zM12 6q-1.266 0-2.391 0.422l-1.547-1.5q1.969-0.938 3.938-0.938 3.75 0 6.375 2.648t2.625 6.352q0 2.063-0.891 3.938l-1.547-1.5q0.422-1.125 0.422-2.438 0-2.906-2.039-4.945t-4.945-2.039z'></path>
                </svg>

            );
        case 'alarm':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M10.547 14.531l4.922-4.969 1.078 1.078-6 6-3.188-3.188 1.031-1.031zM12 20.016q2.906 0 4.945-2.063t2.039-4.969-2.039-4.945-4.945-2.039-4.945 2.039-2.039 4.945 2.039 4.969 4.945 2.063zM12 3.984q3.75 0 6.375 2.648t2.625 6.352-2.625 6.352-6.375 2.648-6.375-2.648-2.625-6.352 2.625-6.352 6.375-2.648zM7.875 3.375l-4.594 3.844-1.266-1.5 4.594-3.844zM21.984 5.719l-1.266 1.547-4.594-3.891 1.266-1.5z'></path>
                </svg>
            );
        case 'bell_off':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M15.984 17.016v-6q0-1.922-1.078-3.211t-2.906-1.289-2.906 1.289-1.078 3.211v6h7.969zM18 15.984l2.016 2.016v0.984h-16.031v-0.984l2.016-2.016v-4.969q0-2.344 1.195-4.078t3.305-2.25v-0.703q0-0.609 0.422-1.055t1.078-0.445 1.078 0.445 0.422 1.055v0.703q2.109 0.516 3.305 2.25t1.195 4.078v4.969zM12 21.984q-0.797 0-1.406-0.586t-0.609-1.383h4.031q0 0.797-0.609 1.383t-1.406 0.586z'></path>
                </svg>
            );
        case 'bell':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M18 15.984l2.016 2.016v0.984h-16.031v-0.984l2.016-2.016v-4.969q0-2.344 1.195-4.078t3.305-2.25v-0.703q0-0.609 0.422-1.055t1.078-0.445 1.078 0.445 0.422 1.055v0.703q2.109 0.516 3.305 2.25t1.195 4.078v4.969zM12 21.984q-0.844 0-1.43-0.563t-0.586-1.406h4.031q0 0.797-0.609 1.383t-1.406 0.586z'></path>
                </svg>
            );
        case 'chat':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M20.016 15.984v-12h-16.031v14.016l2.016-2.016h14.016zM20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z'></path>
                </svg>
            );
        case 'chat_filled':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z'></path>
                </svg>
            );
        case 'heart_off':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M12.094 18.563q2.25-2.016 3.328-3.047t2.344-2.438 1.758-2.484 0.492-2.109q0-1.5-1.008-2.484t-2.508-0.984q-1.172 0-2.18 0.656t-1.383 1.688h-1.875q-0.375-1.031-1.383-1.688t-2.18-0.656q-1.5 0-2.508 0.984t-1.008 2.484q0 1.031 0.492 2.109t1.758 2.484 2.344 2.438 3.328 3.047l0.094 0.094zM16.5 3q2.344 0 3.914 1.594t1.57 3.891q0 1.359-0.516 2.648t-1.898 2.883-2.508 2.672-3.609 3.328l-1.453 1.313-1.453-1.266q-3.234-2.906-4.664-4.359t-2.648-3.422-1.219-3.797q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109z'></path>
                </svg>
            );
        case 'heart':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z'></path>
                </svg>
            );
        case 'notifo':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 403.2 403.2'>
                    <circle cx="123.8" cy="71.15" r="43.4" fill="#ef3f5d"/>
                    <path fill="#675de2" d="M123.8 143.65c-16.8 0-32-5.9-44.3-15.5 0 .5-.1 1.1-.1 1.6v192h53.7v-179c-3.1.4-6.1.9-9.3.9z"/>
                    <path fill="#675de2" d="M201.7 7.55c-12.3 0-24.1 1.9-35.3 5.2 15.7 11.5 26.3 29 28.9 49.1 2.1-.2 4.2-.6 6.3-.6 37.7 0 68.5 30.8 68.5 68.5v192h53.7v-192c.1-67.4-54.7-122.2-122.1-122.2Z"/>
                    <path fill="#675de2" d="M201.65 395.65c27.1 0 49.2-22.1 49.2-49.2h-98.5c0 27 22.2 49.2 49.3 49.2z"/>
                </svg>
            );
        case 'star_off':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z'></path>
                </svg>
            );
        case 'star':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z'></path>
                </svg>
            );
        case 'delete':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M15.516 3.984h3.469v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969zM8.016 9v9.984h7.969v-9.984h-7.969zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z'></path>
                </svg>
            );
        case 'profile':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M12 14.016q2.531 0 5.273 1.102t2.742 2.883v2.016h-16.031v-2.016q0-1.781 2.742-2.883t5.273-1.102zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z'></path>
                </svg>
            );
        case 'back':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M21 11.016v1.969h-14.156l3.563 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.563 3.609h14.156z'></path>
                </svg>
            );
        case 'settings':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
                    <path d='M12 15.516q1.453 0 2.484-1.031t1.031-2.484-1.031-2.484-2.484-1.031-2.484 1.031-1.031 2.484 1.031 2.484 2.484 1.031zM19.453 12.984l2.109 1.641q0.328 0.234 0.094 0.656l-2.016 3.469q-0.188 0.328-0.609 0.188l-2.484-0.984q-0.984 0.703-1.688 0.984l-0.375 2.625q-0.094 0.422-0.469 0.422h-4.031q-0.375 0-0.469-0.422l-0.375-2.625q-0.891-0.375-1.688-0.984l-2.484 0.984q-0.422 0.141-0.609-0.188l-2.016-3.469q-0.234-0.422 0.094-0.656l2.109-1.641q-0.047-0.328-0.047-0.984t0.047-0.984l-2.109-1.641q-0.328-0.234-0.094-0.656l2.016-3.469q0.188-0.328 0.609-0.188l2.484 0.984q0.984-0.703 1.688-0.984l0.375-2.625q0.094-0.422 0.469-0.422h4.031q0.375 0 0.469 0.422l0.375 2.625q0.891 0.375 1.688 0.984l2.484-0.984q0.422-0.141 0.609 0.188l2.016 3.469q0.234 0.422-0.094 0.656l-2.109 1.641q0.047 0.328 0.047 0.984t-0.047 0.984z'></path>
                </svg>
            );
        case 'logo':
            return (
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' height={size} viewBox='0 0 1153 412'>
                    <circle fill='#ef3f5d' r='43.4' cy='77.2' cx='60.2'/>
                    <path fill='#675de2' d='M138.1 13.6c-12.3 0-24.1 1.9-35.3 5.2 15.7 11.5 26.3 29 28.9 49.1 2.1-.2 4.2-.6 6.3-.6 37.7 0 68.5 30.8 68.5 68.5v192h53.7v-192c.1-67.4-54.7-122.2-122.1-122.2zM15.9 134.2c0 .5-.1 1.1-.1 1.6v192h53.7v-179c-3.1.4-6.1.9-9.3.9-16.8 0-32-5.9-44.3-15.5zm72.9 218.3c0 27 22.2 49.2 49.3 49.2 27.1 0 49.2-22.1 49.2-49.2H88.8z'></path>
                    <path fill='#372f66' d='M532.4 13.5v209.3c0 58.3 47.5 105.8 105.8 105.8h37.1v-53.7h-37.1c-28.6 0-52.1-23.4-52.1-52.1V175h89.2v-53.7h-89.2V13.5h-53.7zm363.1 0c-58.3 0-105.8 47.5-105.8 105.8v209.3h53.7V175h52.1v-53.8h-52.1v-1.9c0-28.6 23.4-52.1 52.1-52.1V13.5zm-190.3.1v53.8H759V13.6h-53.8zM396.1 67.4c-58.3 0-105.8 47.5-105.8 105.8v49.6c0 58.3 47.5 105.8 105.8 105.8s105.8-47.5 105.8-105.8v-49.6c0-58.3-47.5-105.8-105.8-105.8zm636.1 0c-58.3 0-105.8 47.5-105.8 105.8v49.6c0 58.3 47.5 105.8 105.8 105.8S1138 281.2 1138 222.8v-49.6c0-58.3-47.5-105.8-105.8-105.8zm-636.1 53.8c28.6 0 52.1 23.4 52.1 52.1v49.6c0 28.6-23.4 52.1-52.1 52.1-28.7 0-52.1-23.4-52.1-52.1v-49.6c.1-28.7 23.5-52.1 52.1-52.1zm309.1 0v206.6h53.7V121.2h-53.7zm327 0c28.6 0 52.1 23.4 52.1 52.1v49.6c0 28.6-23.4 52.1-52.1 52.1-28.6 0-52.1-23.4-52.1-52.1v-49.6c0-28.7 23.5-52.1 52.1-52.1z'></path>
                </svg>
            );
        case 'loader':
            return (
                <img width={size} height={size} src='data:image/gif;base64,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' />
            );
        default:
            return null;
    }
};
