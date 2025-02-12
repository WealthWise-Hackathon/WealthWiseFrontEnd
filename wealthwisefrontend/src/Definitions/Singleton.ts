/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Abstract base class for implementing the Singleton design pattern.
 * Ensures that only one instance of the class exists.
 * 
 * @template T - The type of the Singleton subclass.
 */
export abstract class Singleton<T extends Singleton<T>> {
    private static _instances: Map<Function, any> = new Map();

    /**
     * Protected constructor to prevent direct instantiation.
     * Checks if an instance already exists and returns it if so.
     * Otherwise, sets the current instance in the map.
     */
    protected constructor() {
        const ctor = this.constructor as Function;
        if (Singleton._instances.has(ctor)) {
            console.log(`Warning: an instance already exists`);
            return Singleton._instances.get(ctor);
            //throw new Error("Instance of Singleton already exists.");
        }
        Singleton._instances.set(ctor, this);
    }

    /**
     * Retrieves the singleton instance of the class.
     * If no instance exists, it creates one.
     * 
     * @returns {T} The singleton instance of the class.
     */
    public static getInstance<T extends Singleton<T>>(this: new () => T): T {
        const ctor = this.constructor;
        if (!Singleton._instances.has(ctor as Function)) {
            Singleton._instances.set(ctor as Function, new this());
        }
        return Singleton._instances.get(ctor as Function);
    }
}

export default Singleton;