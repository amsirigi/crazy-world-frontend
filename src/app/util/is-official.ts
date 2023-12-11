export class IsOfficial {
    public static T = 'T' as const;
    public static F = 'F' as const;

    private constructor() {} // Ensure it cannot be instantiated

    public static getValues() {
        return [IsOfficial.T, IsOfficial.F] as const;
    }
}
