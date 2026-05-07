'use client';

import { useEffect } from "react";

export const Base = () => {
    useEffect(() => {
        window.location.href = "/about";
    }, []);

    return null;
};