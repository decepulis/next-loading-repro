import Link from "next/link";

const guides = [
  { name: "Overview", path: "listen-for-webhooks" },
  { name: "Verify webhook signatures", path: "verify-webhook-signatures" },
  { name: "Overview", path: "make-api-requests" },
  { name: "Use Postman", path: "postman" },
  { name: "Overview", path: "export-raw-video-view-data" },
  {
    name: "Amazon Kinesis Data Streams",
    path: "export-amazon-kinesis-data-streams",
  },
  { name: "Google Cloud Pub/Sub", path: "export-google-cloud-pubsub" },
];

type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <nav>
          <ul>
            {guides.map((guide) => (
              <li key={guide.path}>
                {/* prefetch = false because we don't want to prefetch EVERY link in the sidebar */}
                {/* btw, without prefetch=false, this works just fine */}
                <Link href={`/guides/${guide.path}`} prefetch={false}>
                  {guide.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
