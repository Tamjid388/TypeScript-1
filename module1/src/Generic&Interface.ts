{
    // Generic & Interface

    interface Developer<T> {
        name: string,
        device: {
            brand: string,
            model: string,
            Year: number
        },
        smartWatch: T
    }

    const developer: Developer<{
        name: string,
        model: string,
        display: string
    }> =
    {

        name: "Alpha",
        device: {
            brand: "AsRock",
            model: "Ex",
            Year: 2022
        },
        smartWatch: {
            name: "AmazFit",
            model: "A2",
            display: "Oled"

        }

    }
    const developer2: Developer<{
        name: string,
        model: string,
        display: string,
        batteryLife: string,
        waterResistant: boolean
    }> = {
        name: "Beta",
        device: {
            brand: "MSI",
            model: "ProMax",
            Year: 2024
        },
        smartWatch: {
            name: "Galaxy Watch",
            model: "5 Pro",
            display: "AMOLED",
            batteryLife: "3 days",
            waterResistant: true,
        }
    };










}