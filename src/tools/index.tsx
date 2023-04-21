import moment from "moment";

export const getDay = (unix: number) => {
  return moment.unix(unix).format("ddd");
};

export const getMonth = (unix: number) => {
    return moment.unix(unix).format("MMM");
}

export const getDate = (unix: number) => {
    return moment.unix(unix).format("DD");
}
export const getAmPmTime = (unix: number) => {
    return moment.unix(unix).format("hh:mmA");
}
