export {};

declare global {
  type I18n = {
    namespace: string;
    locate: Record<string, object>;
  };
}
