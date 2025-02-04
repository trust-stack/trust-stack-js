// Helper type to check if all required properties are set
type HasRequiredProperties<T, Required extends keyof T> = {
  [K in Required]: T[K];
} & {
  [K in Exclude<keyof T, Required>]?: T[K];
};

// Get keys of T where the value is required (no optional modifier)
type RequiredKeys<T> = keyof {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};

// Exclude index signature from type
type ExcludeIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : K]: T[K];
};

// Get all property names excluding index signature
type PropertyNames<T> = keyof ExcludeIndexSignature<T>;

// Exclude @context from required keys check
// @context is not required for the builder to work, it will be added by default
type RequiredKeysWithoutContext<T> = Exclude<RequiredKeys<T>, "@context">;

export class Builder<T> {
  // Track which properties have been set
  protected _props: Partial<T> = {};

  constructor(props?: T) {
    // this.builder = BuilderPattern<T>(props);
    if (props) {
      this._props = {...props};
    }
  }

  public get(key: PropertyNames<T>) {
    return this._props[key];
  }

  protected set<K extends keyof ExcludeIndexSignature<T>>(
    key: K,
    value: T[K]
  ): this & {_props: Partial<T> & Record<K, T[K]>} {
    // (this.builder as any)[key](value);
    this._props = {...this._props, [key]: value};
    return this as any;
  }

  public static fromJSON<T, B extends Builder<T>>(
    this: new (props?: T) => B,
    json: T
  ): T {
    const builder = new this(json);
    (builder as any)._props = json;
    return (
      builder as B & {
        _props: HasRequiredProperties<T, RequiredKeysWithoutContext<T>>;
      }
    ).build();
  }

  public static create<T, B extends Builder<T>>(this: new (props?: T) => B): B {
    return new this();
  }

  public build(
    this: this & {
      _props: HasRequiredProperties<T, RequiredKeysWithoutContext<T>>;
    }
  ): T {
    return {...this._props} as T;
  }
}
