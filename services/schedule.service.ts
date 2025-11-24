import { ScheduleData, ScheduleDataToSave } from "@/components/agendamento-form";
import { format } from "date-fns";

export async function createSchedule(schedule: ScheduleDataToSave): Promise<any> {
  
    const formData = toFormData(schedule);
    const response = await fetch(`${process.env.NEXT_PUBLIC_SCHEDULE_URL}agendamento/salvar`, {
    method: "POST",
    body: formData,
  });
  return response.json();
}

export async function updateSchedule(schedule: ScheduleData): Promise<any> {
    console.log('update schedule', schedule);
    const formData = toFormData(schedule);
    const response = await fetch(`${process.env.NEXT_PUBLIC_SCHEDULE_URL}agendamento/editar`, {
    method: "POST",
    body: formData,
  });
  return response.json();
}

function toFormData(data: Record<string, any>) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, format(value, "dd/MM/yyyy"));
      } else {
        formData.append(key, String(value ?? ""));
      }
    });
    return formData;
  }
  
  