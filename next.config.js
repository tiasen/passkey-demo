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
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
