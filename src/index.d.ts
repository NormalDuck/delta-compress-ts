export declare function applyImmutable(old: any, diff: buffer): any
export declare function applyMutable(old: any, diff: buffer): any
export declare function diffImmutable(old: any, _new: any): buffer | undefined
export declare function diffMutable(old: any, _new: any): LuaTuple<[buffer | undefined, any | undefined]>
