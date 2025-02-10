
export class Time {
    static async wait(seconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, seconds * 1000);
        });
    }
}

export class Easing {
    public static lerp(start: number, end: number, t: number) {
        return start * (1 - t) + end * t;
    }

    public static easeInQuad(t: number) { return t ** 2; }
    public static easeOutQuad(t: number) { return t * (2 - t); }

    public static easeInCubic(t: number) { return t ** 3; }
    public static easeOutCubic(t: number) { return t * (2 - t); }
}

export enum units {
    // absolute units
    null = "",
    px = "px",
    cm = "cm",
    mm = "mm",
    in = "in",
    pt = "pt",
    pc = "pc",
    // relative units
    percent = "%",
    em = "em",
    rem = "rem",
    vw = "vw",
    vh = "vh",
    vmin = "vmin",
    vmax = "vmax",
    ch = "ch",
    ex = "ex"
}

export class Style {
    static units = units;
    public static parse(input: string): [value: number, unit: units] {
        const value = parseFloat(input);
        const unit = input.replace(value.toString(), '').trim();
        return [value, unit as units ]
    }
}



