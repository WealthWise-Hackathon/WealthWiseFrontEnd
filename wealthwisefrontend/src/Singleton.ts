/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

export abstract class Singleton<T extends Singleton<T>> {
    private static _instances: Map<Function, any> = new Map();

    protected constructor() {
        const ctor = this.constructor as Function;
        if (Singleton._instances.has(ctor)) {
            console.log(`Warning: an instance already exists`);
            return Singleton._instances.get(ctor);
            //throw new Error("Instance of Singleton already exists.");
        }
        Singleton._instances.set(ctor, this);
    }

    public static getInstance<T extends Singleton<T>>(this: new () => T): T {
        const ctor = this.constructor;
        if (!Singleton._instances.has(ctor as Function)) {
            Singleton._instances.set(ctor as Function, new this());
        }
        return Singleton._instances.get(ctor as Function);
    }
}

export default Singleton;