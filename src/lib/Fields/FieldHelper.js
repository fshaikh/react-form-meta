export function getRequiredValue(schema) {
    const required = schema.required;
    const field = schema.field;

    return required == null ? false : field.name in required;
}