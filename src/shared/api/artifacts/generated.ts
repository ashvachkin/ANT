/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddToStreamDto {
  /**
   * Дата сдачи ДЗ
   * @format date-time
   */
  dueDate: string;
  /**
   * id ДЗ
   * @example "10"
   */
  homeworkId: number;
  /**
   * id потока
   * @example "10"
   */
  streamId: number;
}

export type ConflictException = object;

export interface Course {
  /** описание */
  description: string;
  /**
   * id
   * @example "10"
   */
  id: number;
  /**
   * имя
   * @example "Курс"
   */
  name: string;
  /** Статус */
  status: 'PUBLISHED' | 'DRAFT';
  /** Потоки */
  streams: Stream[];
}

export interface CourseData {
  /** Айди Курса */
  courseId: number;
  /** Название Курса */
  courseName: string;
}

export interface CourseDto {
  /**
   * описание
   * @example "Описание"
   */
  description: string;
  /**
   * Описание
   * @example 1
   */
  id: number;
  /**
   * имя
   * @example "Курс"
   */
  name: string;
  /** Статус */
  status: 'PUBLISHED' | 'DRAFT';
}

export interface CourseResp {
  /** Id Курса */
  id: number;
  /** Название Курса */
  name: string;
}

export interface CourseRespDto {
  /** id Курса */
  id: number;
  /** Название Курса */
  name: string;
}

export interface CourseResponseDto {
  /** Описание */
  description: string;
  /** Id */
  id: number;
  /** Название курса */
  name: string;
  /** Статус */
  status: string;
  /** Потоки */
  streams?: Stream[] | null;
}

export interface CreateCourseDto {
  /**
   * Описание курса
   * @example "Ну тут какое то описание"
   */
  description: string;
  /**
   * Название курса
   * @example "Ну тут какое то название, должно быть уникальным"
   */
  name: string;
}

export interface CreateEventDto {
  /**
   * Описание
   * @example "Описание"
   */
  description: string;
  /**
   * дата и время время окончания события
   * @format date-time
   * @example "2025-05-25T23:50:20.680Z"
   */
  endDate: string;
  /**
   * Тема занятия
   * @example "Основы HTML"
   */
  name: string;
  /**
   * Периодичность события
   * @example "3"
   */
  reccurence: number;
  /**
   * дата и время начала события
   * @format date-time
   * @example "2025-05-25T21:50:20.680Z"
   */
  startDate: string;
  /** @example "NEW" */
  status: 'NEW' | 'COMPLETED';
  /**
   * идентификатор курса
   * @example 1
   */
  streamId: number;
}

export interface CreateFeedBackDto {
  /**
   * Комментарий
   * @example "Мой комментарий"
   */
  comment: string;
  /**
   * Id курса
   * @example 1
   */
  courseId: number;
  /**
   * Почта
   * @example "feedback@mail.com"
   */
  email: string;
  /**
   * ФИО
   * @example "Новый Юзер"
   */
  fullname: string;
  /**
   * Телефон
   * @example "999-888-77-66"
   */
  phone: string;
}

export interface CreateHomeworkDto {
  /**
   * ID Связанного курса
   * @example 1
   */
  courseId: number;
  /**
   * Описание
   * @example "Описание задания"
   */
  description?: string;
  /**
   * Заголовок
   * @example "Задание №1"
   */
  title: string;
}

export interface CreateHomeworkSubmissionsDto {
  /**
   * Id Домашнего задания
   * @example 4
   */
  homeworkId: number;
  /**
   * Id ментора
   * @example 2
   */
  mentorId: number;
  /**
   * Ссылка на домашнее задание
   * @example "https://github.com/my-dz"
   */
  sourceLink: string;
  /**
   * Id потока
   * @example 1
   */
  streamId: number;
}

export interface CreateStreamEnrollmentDto {
  /**
   * Статус зачисления
   * @example "active completed withdrawn"
   */
  status: 'active' | 'completed' | 'withdrawn';
  /**
   * ID потока
   * @example "2"
   */
  streamId: number;
  /**
   * ID студента
   * @example "3"
   */
  studentId: number;
}

export interface CreateStreamsDto {
  /**
   * id Курса
   * @example "1"
   */
  courseId: number;
  /**
   * Наименование потока
   * @example "Name"
   */
  name: string;
  /**
   * Дата старта Потока
   * @format date-time
   */
  startDate?: string;
}

export interface Event {
  /**
   * Описание
   * @example "Описание"
   */
  description: string;
  /**
   * дата и время время окончания события
   * @format date-time
   * @example "15.05.2024 20:00"
   */
  endDate: string;
  /**
   * id
   * @example "10"
   */
  id: number;
  /**
   * Тема занятия
   * @example "Основы HTML"
   */
  name: string;
  /**
   * Периодичность события
   * @example "3"
   */
  reccurence: number;
  /**
   * дата и время начала события
   * @format date-time
   * @example "15.05.2024 19:00"
   */
  startDate: string;
  /** @example "NEW" */
  status: 'NEW' | 'COMPLETED';
  /** Поток */
  stream: Stream;
  /** ID Потока */
  streamId: number;
}

export interface EventResponseDto {
  /** Описание */
  description: string;
  /**
   * дата и время время окончания события
   * @format date-time
   */
  endDate: string;
  /** id */
  id: number;
  /** Тема занятия */
  name: string;
  /**
   * дата и время начала события
   * @format date-time
   */
  startDate: string;
  /** Статус события */
  status: string;
  /** ID Потока */
  streamId: number;
}

export interface FeedBack {
  /**
   * Комментарий
   * @example "Мой комментарий"
   */
  comment: string;
  /**
   * Id курса
   * @example 1
   */
  courseId: number;
  /**
   * Почта
   * @example "feedback@mail.com"
   */
  email: string;
  /**
   * ФИО
   * @example "Новый Юзер"
   */
  fullname: string;
  /** Id */
  id: number;
  /**
   * Телефон
   * @example "999-888-77-66"
   */
  phone: string;
}

export interface HmRespSh {
  /** ID Курса */
  courseId: number;
  /**
   * Описание
   * @example "Описание"
   */
  description: string;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /**
   * Заголовок
   * @example "Задание №1"
   */
  title: string;
}

export interface Homework {
  /** ID Курса */
  course: Course;
  /** ID Курса */
  courseId: number;
  /**
   * Описание
   * @example "Описание"
   */
  description: string;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /**
   * Заголовок
   * @example "Задание №1"
   */
  title: string;
}

export interface HomeworkDto {
  /**
   * Айди курса, к которому относится ДЗ
   * @example "1"
   */
  courseId: number;
  /**
   * Описание
   * @example "Описание"
   */
  description: string;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /**
   * Заголовок
   * @example "Задание №1"
   */
  title: string;
}

export interface HomeworkRelationsDto {
  /** Курс */
  course: CourseDto;
  /**
   * ID Курса
   * @example 1
   */
  courseId: number;
  /**
   * Описание
   * @example "Описание"
   */
  description: string;
  /**
   * id
   * @example 1
   */
  id: number;
  /**
   * Заголовок
   * @example "Задание №1"
   */
  title: string;
}

export interface HomeworkResp {
  /** Описание ДЗ */
  description: string;
  /** Id ДЗ */
  id: number;
  /** Название ДЗ */
  title: string;
}

export interface HomeworkSubmission {
  /**
   * Обратная связь
   * @example "Молодец, продолжай в том же духе"
   */
  feedback: string;
  /**
   * Оценка, от 1 до 10 включительно
   * @example 1
   */
  grade: number;
  /** Домашнее задание */
  homework: Homework;
  /**
   * Id Домашнего задания
   * @example 4
   */
  homeworkId: number;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /** Ментор */
  mentor: Mentor;
  /**
   * Id ментора
   * @example 2
   */
  mentorId: number;
  /**
   * Ссылка на домашнее задание
   * @example "https://github.com/my-dz"
   */
  sourceLink: string;
  /**
   * Статус
   * @example "Pending Review"
   */
  status: 'Pending Review' | 'Needs Revision' | 'Reviewed';
  /** Поток */
  stream: Stream;
  /**
   * Id потока
   * @example 1
   */
  streamId: number;
  /** Студент */
  student: Student;
  /**
   * Id студента
   * @example 3
   */
  studentId: number;
  /**
   * Дата задания
   * @format date-time
   * @example "22.12.22"
   */
  submissionDate: string;
}

export interface HomeworkSubmissionDto {
  /**
   * Обратная связь
   * @example "Молодец, продолжай в том же духе"
   */
  feedback: string;
  /**
   * Оценка
   * @example 1
   */
  grade: number;
  /** Id домашки */
  homeworkId: number;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /** Id ментора */
  mentorId: number;
  /**
   * Ссылка на домашнее задание
   * @example "https://github.com"
   */
  sourceLink: string;
  /**
   * Статус
   * @example "Pending Review"
   */
  status: 'Pending Review' | 'Needs Revision' | 'Reviewed';
  /** Id потока */
  streamId: number;
  /** Id студента */
  studentId: number;
  /**
   * Дата задания
   * @format date-time
   * @example "22.12.22"
   */
  submissionDate: string;
}

export type HttpException = object;

export interface ImageUploadDto {
  /**
   * Файл картинки для загрузки
   * @format binary
   */
  file: File;
}

export interface LimitedCourse {
  /** описание */
  description: string;
  /**
   * id
   * @example "10"
   */
  id: number;
  /**
   * имя
   * @example "Курс"
   */
  name: string;
  /** Статус */
  status: 'PUBLISHED' | 'DRAFT';
}

export interface ListForMentorResponseDto {
  /**
   * Обратная связь
   * @example "Молодец, продолжай в том же духе"
   */
  feedback: string;
  /**
   * Оценка
   * @example 1
   */
  grade: number;
  /** ДЗ */
  homework: HomeworkResp;
  /**
   * ID
   * @example 1
   */
  id: number;
  /** Id ментора */
  mentorId: number;
  /**
   * Ссылка репозиторий с кодом ДЗ
   * @example "https://github.com"
   */
  sourceLink: string;
  /**
   * Статус
   * @example "Pending Review"
   */
  status: 'Pending Review' | 'Needs Revision' | 'Reviewed';
  /** Поток */
  stream: StreamResp;
  /** Id студента */
  studentId: number;
  /**
   * Дата сдачи задания
   * @format date-time
   * @example "22.12.22"
   */
  submissionDate: string;
}

export type Mentor = object;

export interface MentorAssignStreamDto {
  /** @example "10" */
  mentorId: number;
  /** @example "10" */
  streamId: number;
}

export interface MentorScheduleRespDto {
  /** Описание занятия */
  description: string;
  /**
   * Дата и время время окончания события
   * @format date-time
   */
  endDate: string;
  /** id */
  id: number;
  /** Тема занятия */
  name: string;
  /**
   * Дата и время начала события
   * @format date-time
   */
  startDate: string;
  /** Статус события */
  status: 'NEW' | 'COMPLETED';
  /** Поток, в рамках которого запланировано занятие */
  stream: StreamRespDto;
}

export interface MentorUnassignStreamDto {
  /** @example "10" */
  mentorId: number;
  /** @example "10" */
  streamId: number;
}

export interface MentorsListItemDto {
  /** @example "email@email.ru" */
  email: string;
  /** @example "firstname" */
  firstname: string;
  /** @example "10" */
  id: number;
  /** @example "lastname" */
  lastname: string;
  /** @example "mentor" */
  role: string;
  /** @example "spesialization" */
  spesialization: string;
  /** @example "status" */
  status: string;
}

export type NotFoundException = object;

export interface RecoverPasswordDto {
  /**
   * User email
   * @example "email@email.com"
   */
  email: string;
}

export interface ReviewHomeworkSubmissionDto {
  /**
   * Обратная связь
   * @example "Текст"
   */
  feedback?: string;
  /**
   * Оценка, от 1 до 10 включительно
   * @example "1"
   */
  grade?: number;
  /**
   * Статус
   * @example "Needs Revision / Reviewed"
   */
  status?: string;
}

export interface ShResponseDto {
  /**
   * Дата сдачи ДЗ
   * @format date-time
   */
  dueDate: string;
  /** ДЗ */
  homework: HmRespSh;
  /** id ДЗ */
  homeworkId: number;
  /**
   * id
   * @example "1"
   */
  id: number;
  /** ДЗ */
  stream: StreamRespSh;
  /** id ДЗ */
  streamId: number;
}

export interface SignInDto {
  /**
   * User email
   * @example "email@email.com"
   */
  email: string;
  /**
   * User password, min length is 8
   * @example "12345678"
   */
  password: string;
}

export interface SignUpDto {
  /**
   * User email
   * @example "email@email.com"
   */
  email: string;
  /**
   * First name
   * @example "Alice"
   */
  firstname: string;
  /**
   * Last name
   * @example "Smith"
   */
  lastname: string;
  /**
   * User password, min length is 8
   * @example "12345678"
   */
  password: string;
  /**
   * User role
   * @example "student mentor admin"
   */
  role: string;
}

export interface Stream {
  /** Курс */
  course: Course;
  /** courseId */
  courseId: number;
  /** Enrollments */
  enrollments: StreamEnrollment[];
  /** Events */
  events: Event[];
  /** Домашняя работа */
  homeworkSubmissions: HomeworkSubmission;
  /** Id */
  id: number;
  /** Название */
  name: string;
  /**
   * Дата старта Потока
   * @format date-time
   */
  startDate: string;
  /** status */
  status: string;
  /** StreamAssigment */
  streamAssigment: StreamAssignment[];
}

export interface StreamAssignment {
  /**
   * id
   * @example "10"
   */
  id: number;
  /** Ментор */
  mentor: Mentor;
  /**
   * id ментора
   * @example "10"
   */
  mentorId: number;
  /**
   * Поток
   * @example "10"
   */
  stream: Stream;
  /**
   * id потока
   * @example "10"
   */
  streamId: number;
}

export interface StreamAssignmentDto {
  /** id */
  id: number;
  /** Ментор */
  mentor: Mentor;
  /** id ментора */
  mentorId: number;
  /** Поток */
  stream: Stream;
  /** id потока */
  streamId: number;
}

export interface StreamData {
  /** Средняя оценка за проверенные ДЗ */
  avgGrade: number;
  /** Данные Курса, к которому относится Поток */
  course: CourseData;
  /** Из них сдано Студентом и принято Ментором */
  reviewedHomeworks: number;
  /**
   * Дата старта Потока
   * @format date-time
   */
  startedDate: string;
  /** Айди Потока */
  streamId: number;
  /** Название Потока */
  streamName: string;
  /** Всего ДЗ на Потоке / Курсе */
  totalHomeworks: number;
}

export interface StreamDto {
  /** Id курса */
  courseId: number;
  /** Id */
  id: number;
  /** Название */
  name: string;
  /**
   * Дата старта Потока
   * @format date-time
   */
  startDate: string;
  /** Статус */
  status: 'DRAFT' | 'PUBLISHED' | 'STARTED' | 'FINISHED';
}

export interface StreamEnrollment {
  /**
   * Дата зачисления
   * @format date-time
   * @example "2020-01-01"
   */
  enrollmentDate: string;
  /**
   * Уникальный идентификатор
   * @example "1"
   */
  id: number;
  /**
   * Статус
   * @example "active"
   */
  status: string;
  /** Поток */
  stream: Stream;
  /**
   * ID потока
   * @example "1"
   */
  streamId: number;
  /** Студент */
  student: Student;
  /**
   * ID студента
   * @example "1"
   */
  studentId: number;
}

export interface StreamEnrollmentDto {
  /**
   * Дата зачисления
   * @format date-time
   */
  enrollmentDate: string;
  /** Id */
  id: number;
  /** Статус */
  status: 'active' | 'completed' | 'withdrawn';
  /** Id потока */
  streamId: number;
  /** Название потока */
  streamName: string;
  /** Email студента */
  studentEmail: string;
  /** Id студента */
  studentId: number;
}

export interface StreamEnrollmentResponseDto {
  course: LimitedCourse;
  /** @example 1 */
  courseId: number;
  /** @example 0 */
  id: number;
  /** @example "string" */
  name: string;
  /** @format date-time */
  startDate: string;
  /** @example "string" */
  status: string;
}

export interface StreamResp {
  /** Курс */
  course: CourseResp;
  /** Id Потока */
  id: number;
  /** Название Потока */
  name: string;
}

export interface StreamRespDto {
  /** Курс */
  course: CourseRespDto;
  /** id Потока */
  id: number;
  /** Название Потока */
  name: string;
}

export interface StreamRespSh {
  /** courseId */
  courseId: number;
  /** Id */
  id: number;
  /** Название */
  name: string;
  /**
   * Дата старта Потока
   * @format date-time
   */
  startDate: string;
  /** status */
  status: string;
}

export interface Student {
  /** StreamEnrollments */
  enrollments: StreamEnrollment[];
}

export interface StudentDto {
  /** Почта */
  email: string;
  /** Имя */
  firstname: string;
  /** ID */
  id: number;
  /** Фамилия */
  lastname: string;
}

export interface StudentProfileDto {
  /** Имя Студента */
  firstName: string;
  /** Фамилия Студента */
  lastName: string;
  /**
   * Дата регистрации в системе
   * @format date-time
   */
  registered: string;
  /** Данные Потоков, на которые Студент зачислен */
  streams: StreamData[];
  /** Айди Студента */
  studentId: number;
}

export interface UpdateCourseDto {
  /**
   * Описание курса
   * @example "Ну тут какое то описание"
   */
  description?: string;
  /**
   * Название курса
   * @example "Ну тут какое то название, должно быть уникальным"
   */
  name?: string;
}

export interface UpdateEventDto {
  /**
   * Описание
   * @example "Описание"
   */
  description?: string;
  /**
   * дата и время время окончания события
   * @format date-time
   * @example "2025-05-25T23:50:20.680Z"
   */
  endDate?: string;
  /**
   * Тема занятия
   * @example "Основы HTML"
   */
  name?: string;
  /**
   * Периодичность события
   * @example "3"
   */
  reccurence?: number;
  /**
   * дата и время начала события
   * @format date-time
   * @example "2025-05-25T21:50:20.680Z"
   */
  startDate?: string;
  /** @example "NEW" */
  status?: 'NEW' | 'COMPLETED';
  /**
   * идентификатор курса
   * @example 1
   */
  streamId?: number;
}

export interface UpdateGradeDto {
  /**
   * Оценка, от 1 до 10 включительно
   * @example "5"
   */
  grade: number;
}

export interface UpdateHomeworkDto {
  /**
   * Описание
   * @example "Описание задания"
   */
  description?: string;
  /**
   * Заголовок
   * @example "Задание №1"
   */
  title: string;
}

export interface UpdateHomeworkSubmissionsDto {
  /**
   * Id ментора
   * @example 2
   */
  mentorId: number;
  /**
   * Ссылка на домашнее задание
   * @example "https://github.com/my-dz"
   */
  sourceLink: string;
}

export interface UpdateShDto {
  /**
   * Дата сдачи ДЗ
   * @format date-time
   */
  dueDate: string;
}

export interface UpdateStatusDto {
  /**
   * Статус
   * @example "Needs Revision / Reviewed"
   */
  status: string;
}

export interface UpdateStreamDto {
  /**
   * Наименование потока
   * @example "Name"
   */
  name?: string;
  /**
   * Дата старта Потока
   * @format date-time
   */
  startDate?: string;
  /**
   * Статус потока
   * @example "DRAFT, PUBLISHED, STARTED, FINISHED"
   */
  status?: 'DRAFT' | 'PUBLISHED' | 'STARTED' | 'FINISHED';
}

export interface UpdateStreamEnrollmentDto {
  /**
   * ID потока
   * @example "2"
   */
  streamId: number;
  /**
   * ID Студента
   * @example "3"
   */
  studentId: number;
}

export interface UpdateUserDto {
  /**
   * User email
   * @example "email@email.com"
   */
  email: string;
  /**
   * First name
   * @example "Alice"
   */
  firstname: string;
  /**
   * Last name
   * @example "Smith"
   */
  lastname: string;
}

export interface UserDto {
  /** Почта */
  email: string;
  /** Имя */
  firstname: string;
  /** ID */
  id: number;
  /**
   * путь к Фото
   * @example "/uploads/images/students/3_12345678.jpg"
   */
  imagePath: string;
  /** Фамилия */
  lastname: string;
  /** Роль */
  role: 'mentor' | 'student' | 'admin';
  /** Статус */
  status: 'active' | 'suspended';
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { 'Content-Type': type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title ANT api
 * @version 1.0
 * @externalDocs /docs-yaml
 * @contact
 *
 * Api description
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  streamAssigment = {
    /**
     * No description
     *
     * @tags StreamAssigments
     * @name StreamAssignmentsControllerAssignMentor
     * @summary Прикрепить ментора к потоку
     * @request POST:/stream-assigment/assign
     * @secure
     * @response `200` `StreamAssignmentDto`
     * @response `409` `void` Попытка назначить одного и того же ментора на поток дважды
     */
    streamAssignmentsControllerAssignMentor: (
      data: MentorAssignStreamDto,
      params: RequestParams = {},
    ) =>
      this.http.request<StreamAssignmentDto, void>({
        path: `/stream-assigment/assign`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для всех ролей
     *
     * @tags StreamAssigments
     * @name StreamAssignmentsControllerGetMentorsList
     * @summary Получить список менторов на потоке
     * @request GET:/stream-assigment/mentors/list/{streamId}
     * @secure
     * @response `200` `(MentorsListItemDto)[]`
     */
    streamAssignmentsControllerGetMentorsList: (streamId: number, params: RequestParams = {}) =>
      this.http.request<MentorsListItemDto[], any>({
        path: `/stream-assigment/mentors/list/${streamId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StreamAssigments
     * @name StreamAssignmentsControllerGetSteamsList
     * @summary Получить список потоков у Ментора
     * @request GET:/stream-assigment/streams/list
     * @secure
     * @response `200` `(StreamDto)[]`
     */
    streamAssignmentsControllerGetSteamsList: (params: RequestParams = {}) =>
      this.http.request<StreamDto[], any>({
        path: `/stream-assigment/streams/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StreamAssigments
     * @name StreamAssignmentsControllerUnassignMentor
     * @summary Открепить ментора от потока
     * @request POST:/stream-assigment/unassign
     * @secure
     * @response `200` `StreamAssignment`
     */
    streamAssignmentsControllerUnassignMentor: (
      data: MentorUnassignStreamDto,
      params: RequestParams = {},
    ) =>
      this.http.request<StreamAssignment, any>({
        path: `/stream-assigment/unassign`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerDeleteImage
     * @summary Удаление Пользователем своего файла фотографии или аватара
     * @request POST:/users/image-delete
     * @secure
     * @response `201` `UserDto` Файл успешно удалён
     * @response `404` `void` У Пользователя нет фото
     */
    usersControllerDeleteImage: (params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/image-delete`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerDeleteImageForUser
     * @summary Удаление Админом файла фотографии у Юзера
     * @request POST:/users/image-delete-admin/{userId}
     * @secure
     * @response `201` `UserDto` Файл успешно удалён
     * @response `404` `void` Юзер не найден в БД или Файл отсутствует на диске
     */
    usersControllerDeleteImageForUser: (userId: number, params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/image-delete-admin/${userId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Users
     * @name UsersControllerFindAll
     * @summary Получить активных / удалённых / всех пользователей
     * @request GET:/users/list
     * @secure
     * @response `200` `(UserDto)[]`
     */
    usersControllerFindAll: (
      query: {
        /** Получить только текущих / только "удалённых" из БД / или всех Юзеров */
        deleted: 'no' | 'yes' | 'both';
      },
      params: RequestParams = {},
    ) =>
      this.http.request<UserDto[], any>({
        path: `/users/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFindByEmail
     * @summary Получение по email
     * @request GET:/users/by-email/{email}
     * @secure
     * @response `200` `UserDto`
     */
    usersControllerFindByEmail: (email: string, params: RequestParams = {}) =>
      this.http.request<UserDto, any>({
        path: `/users/by-email/${email}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFindFuzzyByEmail
     * @summary Нечеткий поиск по email
     * @request GET:/users/fuzzy-by-email/{email}
     * @secure
     * @response `200` `(UserDto)[]`
     */
    usersControllerFindFuzzyByEmail: (email: string, params: RequestParams = {}) =>
      this.http.request<UserDto[], any>({
        path: `/users/fuzzy-by-email/${email}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFreezeUser
     * @summary Заморозить пользователя
     * @request PATCH:/users/freeze-user/{id}
     * @secure
     * @response `200` `UserDto`
     * @response `404` `void`
     */
    usersControllerFreezeUser: (id: number, params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/freeze-user/${id}`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description "Мягкое" удаление пользователя из БД с возможностью восстановления
     *
     * @tags Users
     * @name UsersControllerRemove
     * @summary Удалить пользователя
     * @request DELETE:/users/{id}
     * @secure
     * @response `204` `UserDto`
     * @response `404` `void`
     */
    usersControllerRemove: (id: number, params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerRestore
     * @summary Восстановить удалённого пользователя по id
     * @request GET:/users/restore/{id}
     * @secure
     * @response `200` `UserDto`
     * @response `404` `void`
     */
    usersControllerRestore: (id: number, params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/restore/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerUnfreezeUser
     * @summary Разморозить пользователя
     * @request PATCH:/users/unfreeze-user/{id}
     * @secure
     * @response `200` `UserDto`
     * @response `404` `void`
     */
    usersControllerUnfreezeUser: (id: number, params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/unfreeze-user/${id}`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerUpdate
     * @summary Обновить пользователя
     * @request PATCH:/users/{id}
     * @secure
     * @response `200` `UserDto`
     * @response `404` `void`
     * @response `409` `void`
     */
    usersControllerUpdate: (id: number, data: UpdateUserDto, params: RequestParams = {}) =>
      this.http.request<UserDto, void>({
        path: `/users/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerUploadPicture
     * @summary Загрузка Пользователем файла фотографии или аватара
     * @request POST:/users/image-upload
     * @secure
     * @response `201` `void` Файл успешно загружен
     * @response `400` `void` Ошибки валидации по типу файла или по размеру файла
     */
    usersControllerUploadPicture: (data: ImageUploadDto, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/users/image-upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  };
  iam = {
    /**
     * @description Удаляется рефреш токен из хранилища
     *
     * @tags Authentication
     * @name AuthenticationControllerLogout
     * @summary Логаут текущего пользователя
     * @request POST:/iam/logout
     * @secure
     * @response `200` `void`
     */
    authenticationControllerLogout: (params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/iam/logout`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationControllerRefreshToken
     * @summary Рефреш токенов
     * @request POST:/iam/refresh-tokens
     * @response `201` `string` Возвращается Access токен как строка и Refresh токен в куке "refreshToken"
     */
    authenticationControllerRefreshToken: (params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/iam/refresh-tokens`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationControllerSignIn
     * @summary Вход
     * @request POST:/iam/sign-in
     * @response `201` `string` Возвращается Access токен как строка и Refresh токен в куке "refreshToken"
     */
    authenticationControllerSignIn: (data: SignInDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/iam/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationControllerSignUp
     * @summary Регистрация пользователя
     * @request POST:/iam/sign-up
     * @secure
     * @response `201` `string` Информация о том что пользователь зарегистрирован
     * @response `409` `void` Информация о том что пользователь уже существует
     */
    authenticationControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.http.request<string, void>({
        path: `/iam/sign-up`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  stream = {
    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerCreate
     * @summary Создание потока
     * @request POST:/stream/create
     * @secure
     * @response `201` `StreamDto`
     * @response `404` `HttpException`
     * @response `409` `void` Информация о том что Поток с таким именем уже существует
     */
    streamsControllerCreate: (data: CreateStreamsDto, params: RequestParams = {}) =>
      this.http.request<StreamDto, HttpException | void>({
        path: `/stream/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerFindAll
     * @summary Получение потоков по id курса
     * @request GET:/stream/list
     * @secure
     * @response `200` `(StreamDto)[]`
     * @response `404` `HttpException`
     */
    streamsControllerFindAll: (
      query: {
        courseId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<StreamDto[], HttpException>({
        path: `/stream/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerFindDetails
     * @summary Получение деталей потока по id
     * @request GET:/stream/details/{streamId}
     * @secure
     * @response `200` `StreamDto`
     * @response `404` `HttpException`
     */
    streamsControllerFindDetails: (streamId: number, params: RequestParams = {}) =>
      this.http.request<StreamDto, HttpException>({
        path: `/stream/details/${streamId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerFinishStream
     * @summary Завершение потока
     * @request POST:/stream/finish/{streamId}
     * @secure
     * @response `200` `StreamDto`
     * @response `409` `ConflictException`
     */
    streamsControllerFinishStream: (streamId: string, params: RequestParams = {}) =>
      this.http.request<StreamDto, ConflictException>({
        path: `/stream/finish/${streamId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerRemove
     * @summary Удаление потока
     * @request DELETE:/stream/delete/{streamId}
     * @secure
     * @response `200` `StreamDto`
     * @response `404` `void` Не найден Поток с указанным Айди
     */
    streamsControllerRemove: (streamId: string, params: RequestParams = {}) =>
      this.http.request<StreamDto, void>({
        path: `/stream/delete/${streamId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerStartStream
     * @summary Старт потока
     * @request POST:/stream/start/{streamId}
     * @secure
     * @response `200` `StreamDto`
     * @response `409` `ConflictException`
     */
    streamsControllerStartStream: (streamId: string, params: RequestParams = {}) =>
      this.http.request<StreamDto, ConflictException>({
        path: `/stream/start/${streamId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsControllerUpdate
     * @summary Редактирование потока
     * @request POST:/stream/update/{streamId}
     * @secure
     * @response `200` `StreamDto`
     * @response `409` `ConflictException`
     */
    streamsControllerUpdate: (
      streamId: string,
      data: UpdateStreamDto,
      params: RequestParams = {},
    ) =>
      this.http.request<StreamDto, ConflictException>({
        path: `/stream/update/${streamId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  course = {
    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerCreate
     * @summary Создание курса
     * @request POST:/course/create
     * @secure
     * @response `201` `CourseResponseDto`
     * @response `409` `void` Информация о том что Курс с таким именем уже существует
     */
    coursesControllerCreate: (data: CreateCourseDto, params: RequestParams = {}) =>
      this.http.request<CourseResponseDto, void>({
        path: `/course/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerFindAll
     * @summary Получение списка курсов админом
     * @request GET:/course/list
     * @secure
     * @response `200` `(LimitedCourse)[]`
     */
    coursesControllerFindAll: (params: RequestParams = {}) =>
      this.http.request<LimitedCourse[], any>({
        path: `/course/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerFindOne
     * @summary Получение курса по id
     * @request GET:/course/{id}
     * @secure
     * @response `200` `CourseResponseDto`
     * @response `404` `HttpException`
     */
    coursesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.http.request<CourseResponseDto, HttpException>({
        path: `/course/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для всех ролей
     *
     * @tags Courses
     * @name CoursesControllerGetCourseWithDetails
     * @summary Получение деталей курса по id
     * @request GET:/course/details/{courseId}
     * @secure
     * @response `200` `CourseResponseDto`
     * @response `404` `HttpException`
     */
    coursesControllerGetCourseWithDetails: (courseId: number, params: RequestParams = {}) =>
      this.http.request<CourseResponseDto, HttpException>({
        path: `/course/details/${courseId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerPublishCourse
     * @summary Публикация курса
     * @request POST:/course/publish/{courseId}
     * @secure
     * @response `200` `CourseResponseDto`
     * @response `404` `HttpException`
     */
    coursesControllerPublishCourse: (courseId: number, params: RequestParams = {}) =>
      this.http.request<CourseResponseDto, HttpException>({
        path: `/course/publish/${courseId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerRemove
     * @summary Удаление курса
     * @request DELETE:/course/delete/{courseId}
     * @secure
     * @response `200` `CourseResponseDto`
     * @response `404` `HttpException`
     */
    coursesControllerRemove: (courseId: string, params: RequestParams = {}) =>
      this.http.request<CourseResponseDto, HttpException>({
        path: `/course/delete/${courseId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerUnpublishCourse
     * @summary Перевод курса в черновик
     * @request POST:/course/unpublish/{courseId}
     * @secure
     * @response `200` `CourseResponseDto`
     * @response `404` `HttpException`
     */
    coursesControllerUnpublishCourse: (courseId: number, params: RequestParams = {}) =>
      this.http.request<CourseResponseDto, HttpException>({
        path: `/course/unpublish/${courseId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerUpdate
     * @summary Редактирование курса
     * @request PATCH:/course/update/{courseId}
     * @secure
     * @response `200` `CourseResponseDto`
     * @response `404` `HttpException`
     */
    coursesControllerUpdate: (
      courseId: number,
      data: UpdateCourseDto,
      params: RequestParams = {},
    ) =>
      this.http.request<CourseResponseDto, HttpException>({
        path: `/course/update/${courseId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  homework = {
    /**
     * @description Доступно для Админа только
     *
     * @tags Homework
     * @name HomeworkControllerCreate
     * @summary Создание домашнего задания
     * @request POST:/homework/create
     * @secure
     * @response `201` `HomeworkDto`
     */
    homeworkControllerCreate: (data: CreateHomeworkDto, params: RequestParams = {}) =>
      this.http.request<HomeworkDto, any>({
        path: `/homework/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа и Ментора
     *
     * @tags Homework
     * @name HomeworkControllerFindOne
     * @summary Получение ДЗ по id
     * @request GET:/homework/{id}
     * @secure
     * @response `200` `HomeworkDto`
     * @response `404` `HttpException`
     */
    homeworkControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.http.request<HomeworkDto, HttpException>({
        path: `/homework/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа и Ментора
     *
     * @tags Homework
     * @name HomeworkControllerFindOneWithDetails
     * @summary Получение деталей ДЗ по id
     * @request GET:/homework/details/{id}
     * @secure
     * @response `200` `HomeworkRelationsDto`
     * @response `404` `HttpException`
     */
    homeworkControllerFindOneWithDetails: (id: string, params: RequestParams = {}) =>
      this.http.request<HomeworkRelationsDto, HttpException>({
        path: `/homework/details/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа и Ментора
     *
     * @tags Homework
     * @name HomeworkControllerGetAllHomeworks
     * @summary Получение всех домашних заданий по id Курса
     * @request GET:/homework/list
     * @secure
     * @response `200` `(HomeworkDto)[]`
     */
    homeworkControllerGetAllHomeworks: (
      query?: {
        /** ID курса (при отсутствии возвращает ВСЕ задания на сервере) */
        courseId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkDto[], any>({
        path: `/homework/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Студента только
     *
     * @tags Homework
     * @name HomeworkControllerGetAllHomeworksInStream
     * @summary Получение всех домашних заданий по id Потока
     * @request GET:/homework/list-by-stream
     * @secure
     * @response `200` `(HomeworkDto)[]`
     * @response `403` `void` Wrong Stream ID for this Student
     * @response `404` `void` Stream not found with ID
     */
    homeworkControllerGetAllHomeworksInStream: (
      query: {
        streamId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkDto[], void>({
        path: `/homework/list-by-stream`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа только
     *
     * @tags Homework
     * @name HomeworkControllerRemove
     * @summary Удаление ДЗ по id
     * @request DELETE:/homework/delete/{id}
     * @secure
     * @response `200` `HomeworkDto`
     * @response `404` `void` Не найдено ДЗ с указанным Айди
     */
    homeworkControllerRemove: (id: string, params: RequestParams = {}) =>
      this.http.request<HomeworkDto, void>({
        path: `/homework/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа только
     *
     * @tags Homework
     * @name HomeworkControllerUpdate
     * @summary Обновление данных домашнего задания
     * @request PATCH:/homework/update/{id}
     * @secure
     * @response `200` `HomeworkDto`
     * @response `404` `void` Не найдена сущность с указанным Айди
     */
    homeworkControllerUpdate: (id: string, data: UpdateHomeworkDto, params: RequestParams = {}) =>
      this.http.request<HomeworkDto, void>({
        path: `/homework/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  events = {
    /**
     * @description Доступно для Админа или Ментора
     *
     * @tags Events
     * @name EventsControllerCreate
     * @summary Создание события
     * @request POST:/events/create
     * @secure
     * @response `201` `EventResponseDto`
     * @response `400` `void` ошибки валидации
     * @response `409` `void` Имя события не уникально
     */
    eventsControllerCreate: (data: CreateEventDto, params: RequestParams = {}) =>
      this.http.request<EventResponseDto, void>({
        path: `/events/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Events
     * @name EventsControllerGetList
     * @summary Получение всех событий
     * @request GET:/events/list
     * @secure
     * @response `200` `(EventResponseDto)[]`
     */
    eventsControllerGetList: (
      query?: {
        /** ID потока */
        streamId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EventResponseDto[], any>({
        path: `/events/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Ментора
     *
     * @tags Events
     * @name EventsControllerGetMentorSchedule
     * @summary Получение предстоящих событий (расписание) для ментора
     * @request GET:/events/mentor-schedule
     * @secure
     * @response `200` `(MentorScheduleRespDto)[]`
     */
    eventsControllerGetMentorSchedule: (
      query: {
        streamId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<MentorScheduleRespDto[], any>({
        path: `/events/mentor-schedule`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Студента
     *
     * @tags Events
     * @name EventsControllerGetStudentSchedule
     * @summary Получение предстоящих событий (расписание) для студента
     * @request GET:/events/student-schedule
     * @secure
     * @response `200` `(EventResponseDto)[]`
     * @response `404` `HttpException`
     */
    eventsControllerGetStudentSchedule: (
      query: {
        streamId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EventResponseDto[], HttpException>({
        path: `/events/student-schedule`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа и Ментора
     *
     * @tags Events
     * @name EventsControllerRemove
     * @summary Удаление события
     * @request DELETE:/events/delete/{id}
     * @secure
     * @response `200` `EventResponseDto`
     * @response `404` `void` Не найдено событие с указанным ID
     */
    eventsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.http.request<EventResponseDto, void>({
        path: `/events/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно для Админа и Ментора
     *
     * @tags Events
     * @name EventsControllerUpdate
     * @summary Обновление события
     * @request PATCH:/events/update/{id}
     * @secure
     * @response `200` `EventResponseDto`
     * @response `400` `void` ошибки валидации
     * @response `404` `void`
     */
    eventsControllerUpdate: (id: string, data: UpdateEventDto, params: RequestParams = {}) =>
      this.http.request<EventResponseDto, void>({
        path: `/events/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  homeworkSubmissions = {
    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerChangeStatus
     * @summary Изменение статуса Ментором
     * @request PATCH:/homework-submissions/change-status/{id}
     * @secure
     * @response `200` `HomeworkSubmissionDto`
     * @response `409` `ConflictException`
     */
    homeworkSubmissionsControllerChangeStatus: (
      id: string,
      data: UpdateStatusDto,
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkSubmissionDto, ConflictException>({
        path: `/homework-submissions/change-status/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Студент может удалить Заявку только со статусом: "Pending Review", иначе получим ForbiddenException
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerDelete
     * @summary Удаление Студентом Заявки на проверку ДЗ
     * @request DELETE:/homework-submissions/delete/{id}
     * @secure
     * @response `200` `HomeworkSubmissionDto`
     * @response `403` `void` Попытка удалить не свою Заявку, либо ДЗ уже прошло проверку
     * @response `404` `void` Не найдена Заявка по предоставленному Айди
     */
    homeworkSubmissionsControllerDelete: (id: number, params: RequestParams = {}) =>
      this.http.request<HomeworkSubmissionDto, void>({
        path: `/homework-submissions/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerGetAllHomeworks
     * @summary Получение Студентом или Ментором домашних заданий по studentId
     * @request GET:/homework-submissions/homeworks/{id}
     * @secure
     * @response `200` `(Homework)[]`
     * @response `409` `ConflictException`
     */
    homeworkSubmissionsControllerGetAllHomeworks: (id: string, params: RequestParams = {}) =>
      this.http.request<Homework[], ConflictException>({
        path: `/homework-submissions/homeworks/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerGetHomeworksList
     * @summary Получение Студентом списка сданных работ в рамках потока
     * @request GET:/homework-submissions/list-for-student/{streamId}
     * @secure
     * @response `200` `(HomeworkSubmissionDto)[]`
     * @response `404` `NotFoundException`
     */
    homeworkSubmissionsControllerGetHomeworksList: (streamId: number, params: RequestParams = {}) =>
      this.http.request<HomeworkSubmissionDto[], NotFoundException>({
        path: `/homework-submissions/list-for-student/${streamId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerGetSubmittedHomework
     * @summary Получение Ментором или Админом списка сданных работ в рамках потока c указанным статусом
     * @request GET:/homework-submissions/list-for-mentor
     * @secure
     * @response `200` `(ListForMentorResponseDto)[]`
     * @response `404` `NotFoundException`
     */
    homeworkSubmissionsControllerGetSubmittedHomework: (
      query: {
        /** Статус */
        statuses: ('Pending Review' | 'Needs Revision' | 'Reviewed')[];
        /**
         * Id of the stream
         * @example 1
         */
        streamId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ListForMentorResponseDto[], NotFoundException>({
        path: `/homework-submissions/list-for-mentor`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerReview
     * @summary Изменение Ментором статуса, оценки, оставить feedback
     * @request PATCH:/homework-submissions/review/{homeworkSubmissionId}
     * @secure
     * @response `200` `HomeworkSubmission`
     * @response `409` `ConflictException`
     */
    homeworkSubmissionsControllerReview: (
      homeworkSubmissionId: string,
      data: ReviewHomeworkSubmissionDto,
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkSubmission, ConflictException>({
        path: `/homework-submissions/review/${homeworkSubmissionId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerSendingGrade
     * @summary Изменение оценки Ментором
     * @request PATCH:/homework-submissions/sending-grade/{id}
     * @secure
     * @response `200` `HomeworkSubmissionDto`
     * @response `404` `NotFoundException`
     * @response `409` `ConflictException`
     */
    homeworkSubmissionsControllerSendingGrade: (
      id: string,
      data: UpdateGradeDto,
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkSubmissionDto, NotFoundException | ConflictException>({
        path: `/homework-submissions/sending-grade/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerStudentPerformance
     * @summary Профиль и успеваемость Студента (средняя оценка по проверенным ДЗ)
     * @request GET:/homework-submissions/student/performance
     * @secure
     * @response `200` `StudentProfileDto`
     */
    homeworkSubmissionsControllerStudentPerformance: (params: RequestParams = {}) =>
      this.http.request<StudentProfileDto, any>({
        path: `/homework-submissions/student/performance`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Студент может отправить ДЗ либо впервые, либо в ответ на статус: "Needs Revision", иначе получим ConflictException
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerSubmitHomework
     * @summary Отправка Студентом Заявки на проверку ДЗ
     * @request POST:/homework-submissions/submit
     * @secure
     * @response `201` `HomeworkSubmissionDto`
     * @response `404` `void` Не найдена одна из сущностей по предоставленным Айди
     * @response `409` `void` Такая Заявка уже есть в системе и ожидает проверки, либо ДЗ уже проверено и выставлена оценка
     */
    homeworkSubmissionsControllerSubmitHomework: (
      data: CreateHomeworkSubmissionsDto,
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkSubmissionDto, void>({
        path: `/homework-submissions/submit`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Студент может редактировать ДЗ только со статусом: "Pending Review", иначе получим ConflictException
     *
     * @tags homework-submissions
     * @name HomeworkSubmissionsControllerUpdateHomSub
     * @summary Редактирование Студентом заявки на проверку ДЗ
     * @request PATCH:/homework-submissions/update/{hsId}
     * @secure
     * @response `200` `HomeworkSubmissionDto`
     * @response `403` `void` Попытка редактировать не своё ДЗ
     * @response `404` `void` Не найдена одна из сущностей по предоставленным Айди
     * @response `409` `void` Такое ДЗ уже было проверено
     */
    homeworkSubmissionsControllerUpdateHomSub: (
      hsId: number,
      data: UpdateHomeworkSubmissionsDto,
      params: RequestParams = {},
    ) =>
      this.http.request<HomeworkSubmissionDto, void>({
        path: `/homework-submissions/update/${hsId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  streamEnrollments = {
    /**
     * @description Доступно только для Админа
     *
     * @tags stream-enrollments
     * @name StreamEnrollmentsControllerEnroll
     * @summary Зачисление студента на поток
     * @request POST:/stream-enrollments/enroll
     * @secure
     * @response `201` `StreamEnrollmentDto`
     * @response `400` `void` Студент уже записан на данный Поток
     */
    streamEnrollmentsControllerEnroll: (
      data: CreateStreamEnrollmentDto,
      params: RequestParams = {},
    ) =>
      this.http.request<StreamEnrollmentDto, void>({
        path: `/stream-enrollments/enroll`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Студента
     *
     * @tags stream-enrollments
     * @name StreamEnrollmentsControllerGetList
     * @summary Список потоков, на которых учится студент
     * @request GET:/stream-enrollments/streams/list
     * @secure
     * @response `200` `(StreamEnrollmentResponseDto)[]`
     */
    streamEnrollmentsControllerGetList: (params: RequestParams = {}) =>
      this.http.request<StreamEnrollmentResponseDto[], any>({
        path: `/stream-enrollments/streams/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Студента
     *
     * @tags stream-enrollments
     * @name StreamEnrollmentsControllerGetStreamById
     * @summary Информация о Потоке и Курсе, на котором учится студент
     * @request GET:/stream-enrollments/streams/{streamId}
     * @secure
     * @response `200` `StreamEnrollmentResponseDto`
     * @response `404` `void` Студент не учится на указанном Потоке
     */
    streamEnrollmentsControllerGetStreamById: (streamId: number, params: RequestParams = {}) =>
      this.http.request<StreamEnrollmentResponseDto, void>({
        path: `/stream-enrollments/streams/${streamId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags stream-enrollments
     * @name StreamEnrollmentsControllerGetStudentsList
     * @summary Список студентов на потоке
     * @request GET:/stream-enrollments/students/list
     * @secure
     * @response `200` `(StudentDto)[]`
     */
    streamEnrollmentsControllerGetStudentsList: (
      query: {
        streamId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<StudentDto[], any>({
        path: `/stream-enrollments/students/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags stream-enrollments
     * @name StreamEnrollmentsControllerUnenroll
     * @summary Удаление записи студента на поток
     * @request POST:/stream-enrollments/unenroll
     * @secure
     * @response `201` `StreamEnrollmentDto`
     * @response `404` `void` Не найден студент на потоке
     */
    streamEnrollmentsControllerUnenroll: (
      data: UpdateStreamEnrollmentDto,
      params: RequestParams = {},
    ) =>
      this.http.request<StreamEnrollmentDto, void>({
        path: `/stream-enrollments/unenroll`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  feedback = {
    /**
     * @description Только для Админа
     *
     * @tags Feedback
     * @name FeedbackControllerFindAll
     * @summary Получение списка заявок
     * @request GET:/feedback/all
     * @secure
     * @response `200` `(FeedBack)[]`
     */
    feedbackControllerFindAll: (params: RequestParams = {}) =>
      this.http.request<FeedBack[], any>({
        path: `/feedback/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerFindCourses
     * @summary Получение списка курсов
     * @request GET:/feedback/courses
     * @response `200` `(Course)[]`
     */
    feedbackControllerFindCourses: (params: RequestParams = {}) =>
      this.http.request<Course[], any>({
        path: `/feedback/courses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerSendFeedback
     * @summary Отправка заявки
     * @request POST:/feedback/send
     * @response `201` `FeedBack`
     */
    feedbackControllerSendFeedback: (data: CreateFeedBackDto, params: RequestParams = {}) =>
      this.http.request<FeedBack, any>({
        path: `/feedback/send`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  streamHomeworks = {
    /**
     * @description Для Админа и Ментора только
     *
     * @tags StreamHomeworks
     * @name StreamHomeworksControllerAddToStream
     * @summary Добавить связь ДЗ с Потоком и установить дату сдачи ДЗ
     * @request POST:/stream-homeworks/add
     * @secure
     * @response `201` `ShResponseDto`
     * @response `400` `void` Нельзя прикрепить ДЗ с одного Курса на Поток к другому Курсу или Нельзя установить дату в прошлом
     * @response `404` `void` Не найдена сущность с указанным Айди
     * @response `409` `void` Попытка добавить одно и то же ДЗ на Поток дважды
     */
    streamHomeworksControllerAddToStream: (data: AddToStreamDto, params: RequestParams = {}) =>
      this.http.request<ShResponseDto, void>({
        path: `/stream-homeworks/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Для всех
     *
     * @tags StreamHomeworks
     * @name StreamHomeworksControllerGetAllForStream
     * @summary Список ДЗ на Потоке
     * @request GET:/stream-homeworks/list/{streamId}
     * @secure
     * @response `200` `(ShResponseDto)[]`
     */
    streamHomeworksControllerGetAllForStream: (streamId: number, params: RequestParams = {}) =>
      this.http.request<ShResponseDto[], any>({
        path: `/stream-homeworks/list/${streamId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Для Админа и Ментора только
     *
     * @tags StreamHomeworks
     * @name StreamHomeworksControllerRemoveFromStream
     * @summary Удалить связь ДЗ с Потоком по Айди связи
     * @request DELETE:/stream-homeworks/delete/{id}
     * @secure
     * @response `404` `void` Не найдена сущность с указанным Айди
     */
    streamHomeworksControllerRemoveFromStream: (id: number, params: RequestParams = {}) =>
      this.http.request<any, void>({
        path: `/stream-homeworks/delete/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Для Админа и Ментора только
     *
     * @tags StreamHomeworks
     * @name StreamHomeworksControllerUpdate
     * @summary Изменить дату сдачи ДЗ на Потоке по Айди связи
     * @request PATCH:/stream-homeworks/update/{id}
     * @secure
     * @response `400` `void` Нельзя установить дату в прошлом
     * @response `404` `void` Не найдена сущность с указанным Айди
     */
    streamHomeworksControllerUpdate: (id: number, data: UpdateShDto, params: RequestParams = {}) =>
      this.http.request<any, void>({
        path: `/stream-homeworks/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
