/* Module */
class Url {
    public static matchUrl(url: string): boolean {
        const regex: RegExp = new RegExp(
            '^' +
            // protocol identifier (optional)
            // short syntax // still required
            '(?:(?:(?:https?|ftp|file|torrent|image|irc|ssh|ssl):)?\\/\\/)?' +
            // user:pass BasicAuth (optional)
            '(?:\\S+(?::\\S*)?@)?' +
            '(?:' +
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
            '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
            '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
            '|' +
            // host & domain names, may end with dot
            // can be replaced by a shortest alternative
            // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
            '(?:' +
            '(?:' +
            '[a-z0-9\\u00a1-\\uffff]' +
            '[a-z0-9\\u00a1-\\uffff_-]{0,62}' +
            ')?' +
            '[a-z0-9\\u00a1-\\uffff]\\.?' +
            ')+' +
            // TLD identifier name, may end with dot
            '(?:[a-z\\u00a1-\\uffff]{2,}\\.?)' +
            ')' +
            // port number (optional)
            '(?::\\d{2,5})?' +
            // resource path (optional)
            '(?:[/?#]\\S*)?' +
            '$', 'i'
        );

        return regex.test(url);
    }

    public static matchUri(uri: string): boolean {
        const regex: RegExp = new RegExp('^(/\\S+)+/?$', 'i');

        return regex.test(uri);
    }
}

export default Url;
