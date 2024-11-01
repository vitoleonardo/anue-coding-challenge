import { v4 as uuidv4 } from 'uuid';

const mockTodoListData = [
  {
    id: '69601d06-1e2b-450e-83bd-ebea21139aee',
    itemName: 'Buy groceries',
    status: 'pending',
    createdAt: '2024-10-30T10:00:00Z',
  },
  {
    id: 'fe26ed5d-292b-4ccb-b4a6-327b3bbc824e',
    itemName: 'Finish report',
    status: 'completed',
    createdAt: '2024-10-29T14:30:00Z',
  },
  {
    id: 'b840cb9b-d25c-408e-bf65-528215bdedff',
    itemName: 'Book doctor appointment',
    status: 'pending',
    createdAt: '2024-10-28T09:15:00Z',
  },
  {
    id: '4ef9b265-4501-4c2f-b7a8-481e5a9235f8',
    itemName: 'Call mom',
    status: 'completed',
    createdAt: '2024-10-27T18:00:00Z',
  },
  {
    id: 'b2654ef9-b7a8-4c2f-4501-481e5a9235f8',
    itemName: 'Pay bills',
    status: 'pending',
    createdAt: '2024-10-26T11:45:00Z',
  },
];

export { mockTodoListData };
