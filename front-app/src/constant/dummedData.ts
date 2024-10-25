const clients=[
        {
            "id": "client01",
            "name": "Client 1",
            "ip": "100.91.0.30",
            "port": 8061,
            "subscription": 5,
            "connection_status": "connected",
            "current_requested_bandwidth": 5,
            "current_allocated_bandwidth": 5,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client02",
            "name": "Client 2",
            "ip": "225.241.236.222",
            "port": 8274,
            "subscription": 19,
            "connection_status": "connected",
            "current_requested_bandwidth": 4,
            "current_allocated_bandwidth": 4,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client03",
            "name": "Client 3",
            "ip": "243.27.50.85",
            "port": 8786,
            "subscription": 7,
            "connection_status": "connected",
            "current_requested_bandwidth": 9,
            "current_allocated_bandwidth": 5,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client04",
            "name": "Client 4",
            "ip": "120.56.118.254",
            "port": 8243,
            "subscription": 9,
            "connection_status": "connected",
            "current_requested_bandwidth": 5,
            "current_allocated_bandwidth": 4,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client05",
            "name": "Client 5",
            "ip": "180.149.53.228",
            "port": 8205,
            "subscription": 7,
            "connection_status": "connected",
            "current_requested_bandwidth": 7,
            "current_allocated_bandwidth": 7,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client06",
            "name": "Client 6",
            "ip": "255.144.108.96",
            "port": 8191,
            "subscription": 19,
            "connection_status": "connected",
            "current_requested_bandwidth": 10,
            "current_allocated_bandwidth": 4,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client07",
            "name": "Client 7",
            "ip": "126.155.84.180",
            "port": 8815,
            "subscription": 13,
            "connection_status": "connected",
            "current_requested_bandwidth": 7,
            "current_allocated_bandwidth": 4,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client08",
            "name": "Client 8",
            "ip": "121.8.230.216",
            "port": 8516,
            "subscription": 16,
            "connection_status": "connected",
            "current_requested_bandwidth": 5,
            "current_allocated_bandwidth": 5,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client09",
            "name": "Client 9",
            "ip": "100.211.216.238",
            "port": 8287,
            "subscription": 13,
            "connection_status": "connected",
            "current_requested_bandwidth": 7,
            "current_allocated_bandwidth": 3,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                }
            ]
        },
        {
            "id": "client10",
            "name": "Client 10",
            "ip": "109.15.74.28",
            "port": 8688,
            "subscription": 4,
            "connection_status": "connected",
            "current_requested_bandwidth": 8,
            "current_allocated_bandwidth": 7,
            "bandwidth_logs": [
                {
                    "timestamp": "2024-10-25T00:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T00:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:00:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:15:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:25:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T01:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:35:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T02:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T03:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T04:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:40:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T05:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T06:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:05:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:15:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:25:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:50:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T07:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:00:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T08:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:00:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:25:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T09:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:05:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:10:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T10:55:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:20:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:30:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:35:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:50:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 2,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T11:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 20,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:15:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:50:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T12:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:10:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:15:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:20:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:40:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:45:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T13:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:10:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:15:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:35:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:45:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T14:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:00:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:20:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:35:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:45:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T15:55:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:00:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:05:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:10:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:30:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:40:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:45:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T16:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:05:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:10:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:20:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:30:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:40:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:45:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:50:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T17:55:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 19,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:10:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:35:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:40:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T18:55:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:20:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:25:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:30:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 3,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:35:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:40:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 9,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:50:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T19:55:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:00:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:05:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:10:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:15:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:20:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:25:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:40:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:45:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 17,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:50:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T20:55:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:00:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:05:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:15:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:20:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 15,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:25:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:30:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 8,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:35:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:50:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T21:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:00:00",
                    "requested_bandwidth": 2,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:05:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:10:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:15:00",
                    "requested_bandwidth": 9,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:20:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 11,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:25:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:30:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:35:00",
                    "requested_bandwidth": 5,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:40:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:45:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:50:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 14,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T22:55:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:00:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 12,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:05:00",
                    "requested_bandwidth": 10,
                    "max_bandwidth": 18,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:10:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:15:00",
                    "requested_bandwidth": 3,
                    "max_bandwidth": 10,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:20:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 4,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:25:00",
                    "requested_bandwidth": 6,
                    "max_bandwidth": 6,
                    "allocated_bandwidth": 6,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:30:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 9,
                    "allocated_bandwidth": 5,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:35:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 13,
                    "allocated_bandwidth": 4,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:40:00",
                    "requested_bandwidth": 7,
                    "max_bandwidth": 16,
                    "allocated_bandwidth": 3,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:45:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 5,
                    "allocated_bandwidth": 2,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:50:00",
                    "requested_bandwidth": 4,
                    "max_bandwidth": 7,
                    "allocated_bandwidth": 1,
                    "minimum_bandwidth": 1
                },
                {
                    "timestamp": "2024-10-25T23:55:00",
                    "requested_bandwidth": 8,
                    "max_bandwidth": 8,
                    "allocated_bandwidth": 7,
                    "minimum_bandwidth": 1
                }
            ]
        }
    ]

