"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userData = [
    {
        name: 'Ryan',
        email: 'ryan@prisma.io',
        notes: {
            create: [
                {
                    title: 'Join the Prisma Slack',
                    content: 'https://slack.prisma.io',
                    published: true
                }
            ]
        }
    },
    {
        name: 'Nilu',
        email: 'nilu@prisma.io',
        notes: {
            create: [
                {
                    title: 'Follow Prisma on Twitter',
                    content: 'https://www.twitter.com/prisma',
                    published: true
                }
            ]
        }
    },
    {
        name: 'Hanna-Leena',
        email: 'hanna-leena@prisma.io',
        notes: {
            create: [
                {
                    title: 'Ask a question about Prisma on GitHub',
                    content: 'https://www.github.com/prisma/prisma/discussions',
                    published: true
                },
                {
                    title: 'Prisma on YouTube',
                    content: 'https://pris.ly/youtube'
                }
            ]
        }
    }
];
async function main() {
    console.log('Start seeding ...');
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u
        });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log('Seeding finished.');
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEQ7QUFFMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUE7QUFFakMsTUFBTSxRQUFRLEdBQUc7SUFDZjtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsT0FBTyxFQUFFLHlCQUF5QjtvQkFDbEMsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFO2dCQUNOO29CQUNFLEtBQUssRUFBRSwwQkFBMEI7b0JBQ2pDLE9BQU8sRUFBRSxnQ0FBZ0M7b0JBQ3pDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjthQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsS0FBSyxFQUFFLHVDQUF1QztvQkFDOUMsT0FBTyxFQUFFLGtEQUFrRDtvQkFDM0QsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxtQkFBbUI7b0JBQzFCLE9BQU8sRUFBRSx5QkFBeUI7aUJBQ25DO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQTtBQUVELEtBQUssVUFBVSxJQUFJO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNoQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUN4QixNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDaEQ7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFDbEMsQ0FBQztBQUVELElBQUksRUFBRTtLQUNILElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNmLE1BQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFBO0FBQzVCLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNoQixNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50LCB0eXBlIFByaXNtYSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgdXNlckRhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiAnUnlhbicsXG4gICAgZW1haWw6ICdyeWFuQHByaXNtYS5pbycsXG4gICAgbm90ZXM6IHtcbiAgICAgIGNyZWF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdKb2luIHRoZSBQcmlzbWEgU2xhY2snLFxuICAgICAgICAgIGNvbnRlbnQ6ICdodHRwczovL3NsYWNrLnByaXNtYS5pbycsXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTmlsdScsXG4gICAgZW1haWw6ICduaWx1QHByaXNtYS5pbycsXG4gICAgbm90ZXM6IHtcbiAgICAgIGNyZWF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdGb2xsb3cgUHJpc21hIG9uIFR3aXR0ZXInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdodHRwczovL3d3dy50d2l0dGVyLmNvbS9wcmlzbWEnLFxuICAgICAgICAgIHB1Ymxpc2hlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0hhbm5hLUxlZW5hJyxcbiAgICBlbWFpbDogJ2hhbm5hLWxlZW5hQHByaXNtYS5pbycsXG4gICAgbm90ZXM6IHtcbiAgICAgIGNyZWF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdBc2sgYSBxdWVzdGlvbiBhYm91dCBQcmlzbWEgb24gR2l0SHViJyxcbiAgICAgICAgICBjb250ZW50OiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2Rpc2N1c3Npb25zJyxcbiAgICAgICAgICBwdWJsaXNoZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnUHJpc21hIG9uIFlvdVR1YmUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdodHRwczovL3ByaXMubHkveW91dHViZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXVxuXG5hc3luYyBmdW5jdGlvbiBtYWluKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zb2xlLmxvZygnU3RhcnQgc2VlZGluZyAuLi4nKVxuICBmb3IgKGNvbnN0IHUgb2YgdXNlckRhdGEpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkIHVzZXIgd2l0aCBpZDogJHt1c2VyLmlkfWApXG4gIH1cbiAgY29uc29sZS5sb2coJ1NlZWRpbmcgZmluaXNoZWQuJylcbn1cblxubWFpbigpXG4gIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICB9KVxuICAuY2F0Y2goYXN5bmMgKGUpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfSlcbiJdfQ==