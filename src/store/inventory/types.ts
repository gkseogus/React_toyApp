export interface Inventory {
  team: string;
  user: string;
  checkIn: number;
  checkOut: number;
  workTime: string;
  workState: string;
  homeWork: string;
}

// Omit: 생략, id는 자동 생상할거라서 ID를 뺀값만 생성할때 사용
export type InventoryCreate = Omit<Inventory, "id"> 

// 전송 가능한 액션 유형 (type은 const로 하는게 좋다)
// export const FETCH_REQUEST = "@@inventory/FETCH_REQUEST"; // 요청
export const FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS"; // 성공적인 응답
export const FETCH_ERROR = "@@inventory/FETCH_ERROR"; // 에러

export interface InventoryState {
  readonly loading: boolean;
  readonly data: Inventory[];
  readonly errors?: string;
}
