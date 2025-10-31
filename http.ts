//% color=#0fbc11 icon="\uf1eb" block="HTTP Client"
namespace httpclient {

    /**
     * Send an HTTP GET request to the specified URL
     * @param url the URL to fetch
     */
    //% block
    export function get(url: string): void {
        control.inBackground(() => {
            serial.writeLine("GET " + url)
            // Replace this with actual Wi-Fi or serial module logic
            // For example, send AT commands to ESP8266
        })
    }

    /**
     * Send an HTTP POST request with data
     * @param url the URL to post to
     * @param data the data to send
     */
    //% block
    export function post(url: string, data: string): void {
        control.inBackground(() => {
            serial.writeLine("POST " + url + " DATA: " + data)
            // Replace with actual POST logic
        })
    }
}
