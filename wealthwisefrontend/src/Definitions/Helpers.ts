/**
 * A utility class for time-related functions.
 */
export class Time {
    /**
     * Waits for a specified number of seconds.
     * @param seconds - The number of seconds to wait.
     * @returns A promise that resolves after the specified time.
     */
    static async wait(seconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, seconds * 1000);
        });
    }
}

/**
 * A utility class for easing functions.
 */
export class Easing {
    /**
     * Linearly interpolates between two values.
     * @param start - The start value.
     * @param end - The end value.
     * @param t - The interpolation factor (0 to 1).
     * @returns The interpolated value.
     */
    public static lerp(start: number, end: number, t: number) {
        return start * (1 - t) + end * t;
    }

    /**
     * Eases in with a quadratic function.
     * @param t - The interpolation factor (0 to 1).
     * @returns The eased value.
     */
    public static easeInQuad(t: number) { return t ** 2; }

    /**
     * Eases out with a quadratic function.
     * @param t - The interpolation factor (0 to 1).
     * @returns The eased value.
     */
    public static easeOutQuad(t: number) { return t * (2 - t); }

    /**
     * Eases in with a cubic function.
     * @param t - The interpolation factor (0 to 1).
     * @returns The eased value.
     */
    public static easeInCubic(t: number) { return t ** 3; }

    /**
     * Eases out with a cubic function.
     * @param t - The interpolation factor (0 to 1).
     * @returns The eased value.
     */
    public static easeOutCubic(t: number) { return t * (2 - t); }
}

/**
 * Enumeration of CSS units.
 */
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

/**
 * A utility class for style-related functions.
 */
export class Style {
    static units = units;

    /**
     * Parses a CSS value string into a numeric value and unit.
     * @param input - The CSS value string to parse.
     * @returns A tuple containing the numeric value and unit.
     */
    public static parse(input: string): [value: number, unit: units] {
        const value = parseFloat(input);
        const unit = input.replace(value.toString(), '').trim();
        return [value, unit as units ]
    }
}
