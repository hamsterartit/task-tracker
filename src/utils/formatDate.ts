export const formatDate = (date: number) => {
    const rawDate = new Date(date);
    return rawDate.toLocaleDateString();
}