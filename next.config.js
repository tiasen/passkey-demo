/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {
                source: "/login",
                headers: [
                    {
                        key: "Permissions-Policy",
                        "value": "publickey-credentials-get=*"
                    },
                     {
                        key: "Permissions-Policy",
                        "value": "publickey-credentials-create=*"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
